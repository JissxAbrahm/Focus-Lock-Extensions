# Focus-Lock-Extensions
A lightweight Firefox browser extension that helps you stay focused by locking your current tab and automatically returning you to it whenever you attempt to open or switch tabs.

# 🔒 Focus Lock for Firefox

A lightweight productivity-focused Firefox extension designed to eliminate distractions by locking your browser to a single tab.

## 📌 Overview

Have you ever opened a new tab while studying, only to find yourself browsing unrelated websites?

Focus Lock helps solve this problem.

With a single click, you can lock your current Firefox tab. Whenever you attempt to open a new tab or switch to another tab, the extension automatically returns you to your selected focus tab.

## ✨ Features

- **One-click focus mode** — Lock your current tab instantly.
- **Automatic tab redirection** — Return to the locked tab when opening new tabs.
- **Tab switching prevention** — Automatically return to the focus tab when another tab is activated.
- **Simple interface** — Minimal popup with lock and unlock controls.
- **Persistent state** — Stores the focus lock state locally.
- **Lightweight** — Built using Firefox WebExtensions APIs.

## 🛠️ Built With

- JavaScript
- HTML5
- CSS3
- Firefox WebExtensions API
- Browser Tabs API
- Browser Storage API

## 🚀 Installation

### Temporary Installation

1. Clone or download this repository.
2. Extract the project files.
3. Open Firefox.
4. Navigate to `about:debugging`.
5. Select **This Firefox**.
6. Click **Load Temporary Add-on...**.
7. Select the `manifest.json` file from the project directory.

The extension will now appear under Temporary Extensions.

### Using Focus Lock

1. Open the tab you want to focus on.
2. Click the Focus Lock extension icon.
3. Select **Lock this tab**.
4. Continue working without distractions.
5. Select **Unlock browsing** to return to normal browsing.

## 📂 Project Structure

```text
focus-lock-firefox/
├── manifest.json
├── background.js
├── popup.html
├── popup.css
├── popup.js
├── README.md
└── LICENSE
```

## ⚠️ Limitations

- Firefox does not allow extensions to directly disable its native new-tab button.
- Newly opened tabs may briefly appear before being closed.
- Temporary extension installations are removed when Firefox restarts.
- Focus Lock is a productivity aid and is not intended as a tamper-proof kiosk mode.

## 🔮 Future Improvements

- Focus timer with customizable sessions.
- Automatic unlocking after a scheduled break.
- Distraction attempt counter.
- Persistent installation through Mozilla signing.
- Improved focus-session statistics.

## 📄 License

This project is licensed under the MIT License.
