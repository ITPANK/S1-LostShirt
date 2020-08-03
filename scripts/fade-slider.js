(function () {
  let index = 0;
  let slides = document.querySelectorAll(".fade-slider__item");
  let activeClass = "fade-slider__item--visible";
  setInterval(function () {
    slides[index].classList.remove(activeClass);
    index += 1;
    if (index + 1 > slides.length) index = 0;
    slides[index].classList.add(activeClass);
  }, 5000);
})();
