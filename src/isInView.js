function isInView(el, callback, fullyVisible = false) {
  const elTriggered = el.getAttribute('data-scrollTriggered');
  let elemTop;
  let elemBottom;
  let isVisible;

  // exit out if the callback has already been triggered
  if (elTriggered) { return; }

  elemTop = el.getBoundingClientRect().top;
  elemBottom = el.getBoundingClientRect().bottom;

  // 250 minor threshold delay
  isVisible = (fullyVisible) ? (elemTop >= 0) && (elemBottom <= window.innerHeight) : (elemTop < (window.innerHeight - 250) && elemBottom >= 0);

  if (isVisible && !elTriggered) {
    el.setAttribute('data-scrollTriggered', 'true');
    callback(el);
  }
}