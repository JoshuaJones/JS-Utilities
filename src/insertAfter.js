function insertAfter(parent, child, frag) {
  parent.insertBefore(frag, child.nextSibling);
}