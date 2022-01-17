import tabs from "./modules/tabs";
import modals from "./modules/modals";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modals";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimeId = setTimeout(() => openModal(".modal", modalTimeId), 5000);

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modals("[data-modal]", ".modal", modalTimeId);
  timer(".timer", "2022-05-05");
  cards();
  calc();
  forms("form", modalTimeId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCount: "#total",
    currentCount: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});

// showSlides(sliderIndex);

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }

// function showSlides(n) {
//   if (n > slides.length) {
//     sliderIndex = 1;
//   }

//   if (n < 1) {
//     sliderIndex = slides.length;
//   }

//   slides.forEach((item) => (item.style.display = "none"));
//   slides[sliderIndex - 1].style.display = "block";

//   if (sliderIndex < 10) {
//     current.textContent = `0${sliderIndex}`;
//   } else {
//     current.textContent = sliderIndex;
//   }
// }

// function plusSlides(n) {
//   showSlides((sliderIndex += n));
// }

// next.addEventListener("click", () => {
//   plusSlides(1);
// });

// prev.addEventListener("click", () => {
//   plusSlides(-1);
// });
