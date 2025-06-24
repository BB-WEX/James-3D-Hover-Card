function showToggle() {
    var hide = document.getElementById('hdn-txt')
    var large = document.getElementById('content')
    var bottom = document.getElementById('btm-cont')
    hide.classList.toggle('hidden')
    hide.classList.toggle('enlarge')
    large.classList.toggle('enlarge')
    bottom.classList.toggle('enlarge')
}

const button = document.getElementById("btn-id");

button.addEventListener("click", () => {
  if (button.textContent.includes("Expand")) {
    button.textContent = "Collapse ↑";
  } else {
    button.textContent = "Expand ↓";
  }
});