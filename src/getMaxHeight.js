function getMaxHeight(nodelist) {
  let maxHeight = 0;

  for (let i = 0; i < nodelist.length; i++) {
    const el = nodelist[i];
    let height;

    el.style.height = '';
    height = el.offsetHeight;
    
    maxHeight = (height > maxHeight) ? height : maxHeight;
  }

  return maxHeight;
}