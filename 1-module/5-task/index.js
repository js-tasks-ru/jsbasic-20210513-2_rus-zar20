function truncate(str, maxlength) {
  if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + '…';
  } else {
      return str;
  }
}
alert(truncate('Всем привет!', 10));