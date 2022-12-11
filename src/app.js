import * as VM from '@violentmonkey/dom';

VM.observe(document.head, () => {
  const $el = document.querySelector('title');
  // https://github.com/developit/gmail-unread-count-badge/blob/main/src/content.js
  let m = String($el.innerText).match(/Inbox(?: \((\d+)\))? -/);
  if (m) navigator.setAppBadge(m[1] | 0 || null);
});
