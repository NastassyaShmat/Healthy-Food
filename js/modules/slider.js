function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCount,
  currentCount,
  wrapper,
  field,
}) {
  //Slider

  let sliderIndex = 1;
  let offset = 0;

  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCount),
    current = document.querySelector(currentCount),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${sliderIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = sliderIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const dots = document.createElement("ol"),
    indicators = [];
  dots.classList.add("dots");
  dots.style.cssText = `
 position: absolute;
 right: 0;
 bottom: 0;
 left: 0;
 z-index: 15;
 display: flex;
 justify-content: center;
 margin-right: 15%;
 margin-left: 15%;
 list-style: none;
`;
  slider.append(dots);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
 box-sizing: content-box;
 flex: 0 1 auto;
 width: 30px;
 height: 6px;
 margin-right: 3px;
 margin-left: 3px;
 cursor: pointer;
 background-color: #fff;
 background-clip: padding-box;
 border-top: 10px solid transparent;
 border-bottom: 10px solid transparent;
 opacity: .5;
 transition: opacity .6s ease;
 `;
    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.append(dot);
    indicators.push(dot);
  }

  function changeSlides() {
    if (slides.length < 10) {
      current.textContent = `0${sliderIndex}`;
    } else {
      current.textContent = sliderIndex;
    }

    indicators.forEach((dot) => (dot.style.opacity = "0.5"));
    indicators[sliderIndex - 1].style.opacity = 1;
  }

  function deletNotDegets(str) {
    return +str.replace(/\D/g, " ");
  }

  next.addEventListener("click", () => {
    if (offset === deletNotDegets(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deletNotDegets(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (sliderIndex == slides.length) {
      sliderIndex = 1;
    } else {
      sliderIndex++;
    }

    changeSlides();
  });

  prev.addEventListener("click", () => {
    if (offset === 0) {
      offset = deletNotDegets(width) * (slides.length - 1);
    } else {
      offset -= deletNotDegets(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (sliderIndex == 1) {
      sliderIndex = slides.length;
    } else {
      sliderIndex--;
    }

    changeSlides();
  });

  indicators.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      console.log(slideTo);
      sliderIndex = slideTo;
      offset = deletNotDegets(width) * (sliderIndex - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      changeSlides();
    });
  });
}
export default slider;
