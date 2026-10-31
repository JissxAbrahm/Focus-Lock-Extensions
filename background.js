/* Focus Lock — Firefox background script */
const LOCK_KEY = "focusLockState";

async function getState() {
  const result = await browser.storage.local.get(LOCK_KEY);
  return result[LOCK_KEY] || { enabled: false, tabId: null, windowId: null };
}

async function saveState(state) {
  await browser.storage.local.set({ [LOCK_KEY]: state });
}

async function focusLockedTab(state) {
  if (!state.enabled || !Number.isInteger(state.tabId)) return false;

  try {
    const tab = await browser.tabs.get(state.tabId);
    await browser.windows.update(tab.windowId, { focused: true });
    await browser.tabs.update(tab.id, { active: true });
    return true;
  } catch (error) {
    // The user may have closed the locked tab. Unlock rather than trapping them.
    await saveState({ enabled: false, tabId: null, windowId: null });
    return false;
  }
}

browser.tabs.onCreated.addListener(async (tab) => {
  const state = await getState();
  if (!state.enabled || tab.id === state.tabId) return;

  // Close the newly opened tab, then return to the focus tab.
  try {
    await browser.tabs.remove(tab.id);
  } catch (error) {
    // The tab may already have been removed.
  }
  await focusLockedTab(state);
});

browser.tabs.onActivated.addListener(async (activeInfo) => {
  const state = await getState();
  if (!state.enabled || activeInfo.tabId === state.tabId) return;

  // Return to the locked tab if the user activates a different tab.
  await focusLockedTab(state);
});

browser.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === browser.windows.WINDOW_ID_NONE) return;
  const state = await getState();
  if (!state.enabled || windowId === state.windowId) return;

  // Focus the window containing the locked tab when another Firefox window is selected.
  await focusLockedTab(state);
});

browser.tabs.onRemoved.addListener(async (tabId) => {
  const state = await getState();
  if (state.enabled && tabId === state.tabId) {
    await saveState({ enabled: false, tabId: null, windowId: null });
  }
});

// On browser startup, keep the saved lock if its tab still exists.
// If it no longer exists, focusLockedTab safely unlocks.
browser.runtime.onStartup.addListener(async () => {
  const state = await getState();
  if (state.enabled) await focusLockedTab(state);
});

browser.runtime.onInstalled.addListener(async () => {
  const state = await getState();
  if (state.enabled) await focusLockedTab(state);
});

// Popup calls this to lock/unlock the current tab.
browser.runtime.onMessage.addListener(async (message) => {
  if (message?.action === "getState") {
    return await getState();
  }

  if (message?.action === "toggleLock") {
    const current = await browser.tabs.query({ active: true, currentWindow: true });
    const tab = current[0];
    if (!tab) return { enabled: false, tabId: null, windowId: null };

    const oldState = await getState();
    if (oldState.enabled) {
      const unlocked = { enabled: false, tabId: null, windowId: null };
      await saveState(unlocked);
      return unlocked;
    }

    const locked = { enabled: true, tabId: tab.id, windowId: tab.windowId };
    await saveState(locked);
    return locked;
  }
});