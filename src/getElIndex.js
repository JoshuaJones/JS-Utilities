function getElIndex(el, childSelector) {
  const children = el.parentNode.querySelectorAll(childSelector);
  for (let i = 0; i < children.length; i++) {
    if (children[i] == el) {
      return i;
    }
  }
  return -1;
}