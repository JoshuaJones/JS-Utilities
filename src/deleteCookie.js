// DEPs: setCookie
function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}