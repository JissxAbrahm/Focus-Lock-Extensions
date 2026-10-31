FOCUS LOCK — FIREFOX
====================

What it does
------------
Locks the current Firefox tab. When enabled, opening a new tab or activating
another tab causes Focus Lock to close the newly opened tab (when applicable)
and return to the locked tab.

Install temporarily (Windows)
-----------------------------
1. Extract this ZIP to a folder, for example:
   C:\Users\<your-user>\Documents\FocusLock
2. Open Firefox.
3. In the address bar, enter: about:debugging
4. Choose "This Firefox".
5. Click "Load Temporary Add-on…".
6. Open the extracted folder and select manifest.json.
7. The Focus Lock lock icon should appear in Firefox's toolbar.
   If you don't see it, open the Extensions menu and pin Focus Lock.

Use
---
1. Open the tab you want to stay on.
2. Click the Focus Lock toolbar icon.
3. Click "Lock this tab".
4. Try Ctrl+T or the + button: Focus Lock should return to the locked tab.
5. To stop, click the toolbar icon and choose "Unlock browsing".

Important
---------
Firefox's temporary add-on installation is removed when Firefox restarts.
To use this exact build again after restart, load it again from about:debugging.

For a permanent install, Firefox generally requires an extension signed by
Mozilla. This source is provided for local testing and personal use.

Limitations
-----------
- This is a productivity aid, not a tamper-proof kiosk lock.
- Firefox/browser behavior may allow a very brief new-tab flash.
- Closing the locked tab turns Focus Lock off to avoid trapping you.
- It is designed for normal Firefox windows; private browsing is not enabled
  unless you separately allow the extension in private windows.
