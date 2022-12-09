
// ==UserScript==
// @name      Gmail badge
// @namespace com.edseek
// @match     https://mail.google.com/.+
// @version   1.0.0
// @author    Jason Boxman
// @grant     none
// ==/UserScript==

(function () {
'use strict';

/*! @violentmonkey/dom v2.1.3 | ISC License */

var _VM;
Object.assign(typeof VM !== 'undefined' && ((_VM = VM) == null ? void 0 : _VM.versions) || {}, {
  dom: '2.1.3'
});
/**
 * Observe an existing `node` until `callback` returns `true`.
 * The returned function can be called explicitly to disconnect the observer.
 *
 * ```js
 * VM.observe(document.body, () => {
 *   const node = document.querySelector('.profile');
 *   if (node) {
 *     console.log('It\'s there!');
 *     return true;
 *   }
 * });
 * ```
 */

function observe(node, callback, options) {
  const observer = new MutationObserver((mutations, ob) => {
    const result = callback(mutations, ob);
    if (result) disconnect();
  });
  observer.observe(node, Object.assign({
    childList: true,
    subtree: true
  }, options));

  const disconnect = () => observer.disconnect();

  return disconnect;
}

observe(document.head, () => {
  const $el = document.querySelector('title');
  let m = String($el.innerText).match(/Inbox(?: \((\d+)\))? -/);
  if (m) navigator.setAppBadge(m[1] | 0 || null);
});

})();
