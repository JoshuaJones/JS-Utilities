function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

function qsa(selector, scope) {
  return Array.from((scope || document).querySelectorAll(selector));
}

function $on(target, type, callback, useCapture) {
  target.addEventListener(type, callback, !!useCapture);
}

function $delegate(target, selector, type, handler) {
  const useCapture = type === 'blur' || type === 'focus';
  $on(target, type, dispatchEvent, useCapture);

  function dispatchEvent(event) {
    const targetElement = event.target;
    const potentialElements = qsa(selector, target);
    const hasMatch = potentialElements.indexOf(targetElement) >= 0;

    if (hasMatch) {
      handler.call(targetElement, event)
    }
  }
}