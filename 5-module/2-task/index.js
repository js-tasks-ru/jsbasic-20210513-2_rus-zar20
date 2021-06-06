function toggleText() {
  let button = document.querySelector(`.toggle-text-button`);
  function hide() {
    text.hidden = !text.hidden;
  }
button.addEventListener(`click`, hide);
}
