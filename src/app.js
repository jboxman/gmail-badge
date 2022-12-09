import * as VM from '@violentmonkey/dom';

VM.observe(document.head, () => {
  const $el = document.querySelector('title');
  let m = String($el.innerText).match(/Inbox(?: \((\d+)\))? -/);
  if (m) navigator.setAppBadge(m[1] | 0 || null);
});
