function copyToClipboard(node) {
  let range = document.createRange();

  range.selectNode(node);
  window.getSelection().addRange(range);

  try {
    const successful = document.execCommand('copy');
    const msg = (successful) ? 'Successful' : 'Unsuccessful';
    console.log('Copy Status: ', msg);
  } catch (err) {
    console.error('Unable to copy');
  }

  window.getSelection().removeAllRanges();
}