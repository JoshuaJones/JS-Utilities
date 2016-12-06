function autosize(node) {
  setTimeout(function(){
    node.style.cssText = 'height:auto;';
    node.style.cssText = `height:${node.scrollHeight}px`;
  },0);
}