function goToUrl(lang) {
  let url = "";
  switch (lang) {
    case "us": url = "https://docs.google.com/presentation/d/1ctOGgSnv2cbGOpkizqxgxSuEPs391iHeKHX8cQi1j8Q/"; break;
    case "fr": url = "https://docs.google.com/presentation/d/1wbIYl7H8OX7J7ioC5vXAUHlTQhAoEVIKu5c-cRgvHUM/"; break;
    case "de": url = "https://docs.google.com/presentation/d/1Amf1g3w-RYGcRNj8FitMi2iENv6HNkutA-qQRNOossU/"; break;
    case "it": url = "https://docs.google.com/presentation/d/1g34NiEOW3MJXX113RvoAyKi5r43OhAosiBWwms4B4v4/"; break;
    case "es":
    case "mx": url = "https://docs.google.com/presentation/d/1b1mank_rrGdEtnJsQi4zk25NB-lPIpu_o7s7gS9POhU/"; break;
  }

  if (url !== "") {
    window.open(url);
  }
}

const links = document.querySelectorAll(".languages a");
for (let x = 0; x < links.length; x++) {
  links[x].addEventListener("mouseenter", function() {
    document.getElementById("map").classList.add(this.dataset.language);
  });
  links[x].addEventListener("mouseleave", function() {
    document.getElementById("map").classList.remove(this.dataset.language);
  });
}

const countries = document.querySelectorAll("svg path[role='button']");
for (let x = 0; x < countries.length; x++) {
  countries[x].addEventListener("click", function() {
    goToUrl(this.id);
  });

  countries[x].addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "enter") {
      goToUrl(this.id);
    }
  });
}