const links = document.querySelectorAll(".languages a");
for (let x = 0; x < links.length; x++) {
  links[x].addEventListener("mouseenter", function() {
    document.getElementById("map").classList.add(this.dataset.language);
  });
  links[x].addEventListener("mouseleave", function() {
    document.getElementById("map").classList.remove(this.dataset.language);
  });
}