const statusEl = document.getElementById("status");
const toggleBtn = document.getElementById("toggle");
const hintEl = document.getElementById("hint");

async function refresh() {
  const state = await browser.runtime.sendMessage({ action: "getState" });
  render(state);
}

function render(state) {
  if (state.enabled) {
    statusEl.textContent = "LOCKED • Focus mode is ON";
    toggleBtn.textContent = "Unlock browsing";
    toggleBtn.classList.add("locked");
    hintEl.textContent = "New tabs and tab switches return you to your focus tab.";
  } else {
    statusEl.textContent = "OFF • Normal browsing";
    toggleBtn.textContent = "Lock this tab";
    toggleBtn.classList.remove("locked");
    hintEl.textContent = "Choose the tab you want to focus on, then lock it.";
  }
}

toggleBtn.addEventListener("click", async () => {
  toggleBtn.disabled = true;
  try {
    const state = await browser.runtime.sendMessage({ action: "toggleLock" });
    render(state);
  } finally {
    toggleBtn.disabled = false;
  }
});

refresh();