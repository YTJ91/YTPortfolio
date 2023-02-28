//main Text Event
const introText = document.querySelectorAll(".mainTitle, span, button");
window.onload = () => {
  setTimeout(function () {
    let timer = 100;
    introText.forEach((item) => {
      item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
    });
  }, 1200);
};

// Scroll Opacity Event
// let aboutSection = document.querySelector(".about");
// let mainpage = document.querySelector(".mainpage");
// let skillPage = document.querySelector(".skill");

// window.addEventListener("scroll", (e) => {
//   // console.log(window.scrollY);
//   const rect = aboutSection.getBoundingClientRect();

//   const opacity = (-rect.top + rect.height / 2) / 300;

//   const mainOpacity = (rect.top - rect.height / 2) / 300;

//   const skillOpacity = ((rect.top + rect.height / 2) / 300) * -1;

//   mainpage.style.opacity = mainOpacity;
//   aboutSection.style.opacity = opacity;
//   skillPage.style.opacity = skillOpacity;
// });

const sectionList = document.querySelectorAll(".item");

window.addEventListener("scroll", (e) => {
  let opacity =
    Math.abs(
      Math.cos(((90 / window.innerHeight) * window.scrollY * Math.PI) / 180)
    ) *
      4 -
    3;

  let opacity02 =
    Math.abs(
      Math.cos(
        (((90 / window.innerHeight) * window.scrollY + 90) * Math.PI) / 180
      )
    ) *
      4 -
    3;

  console.log(opacity02);

  sectionList.forEach((section, idx) => {
    let value = idx % 2 === 0 ? opacity : opacity02;
    section.style.opacity = value;
  });
});

// Project Slide Event

let slideWrapper = document.querySelector(".projectPage");
let btnNext = document.querySelector(".btnSlide.next");
let btnPrev = document.querySelector(".btnSlide.prev");

let index = 0;

btnNext.addEventListener("click", () => {
  console.log(index, slideWrapper);
  if (index < 1) {
    index++;
    slideWrapper.style.transform = `translate(${index * -55}vw)`;
  }
});

btnPrev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    slideWrapper.style.transform = `translate(${index * -55}vw)`;
  }
});

let;
