var accordions = document.querySelectorAll("button.accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    hideAll(this);
  };
}

function hideAll(exceptThis) {
  for (var i = 0; i < accordions.length; i++) {
    if (accordions[i] !== exceptThis) {
      accordions[i].classList.remove("active");
      accordions[i].nextElementSibling.style.display = "none";
    }
  }
}
