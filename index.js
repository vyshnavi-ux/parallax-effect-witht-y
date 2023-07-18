var shadegreen = document.querySelector(".shadegreen");
var shadered = document.querySelector(".shadered");
var overviewSection = document.querySelector(".overviewSection");
var outlinedTitleText = document.querySelector(".outlinedTitleText");
var titleBlock = document.querySelector(".titleBlock");
var imageArea = document.querySelector(".imageArea");
var overviewDesc = document.querySelector(".overviewDesc");

let moveRadom = setInterval(() => {
  moveRandomly();
}, 1000);

const moveRandomly = () => {
  shadegreen.style.top =
    Math.round(
      Math.random() * overviewSection.clientHeight - shadegreen.clientHeight
    ) + "px";
  shadegreen.style.left =
    Math.round(
      Math.random() * overviewSection.clientWidth - shadegreen.clientWidth
    ) + "px";
  setTimeout(() => {
    shadered.style.top =
      Math.round(
        Math.random() * overviewSection.clientHeight - shadered.clientHeight
      ) + "px";
    shadered.style.left =
      Math.round(
        Math.random() * overviewSection.clientWidth - shadered.clientWidth
      ) + "px";
  }, 500);
};

window.addEventListener("scroll", () => {
  let overviewSectionRect = overviewSection.getBoundingClientRect();
  
  if (overviewSectionRect.y < 350) {
    outlinedTitleText.style.opacity = 1;
    outlinedTitleText.classList.add("animateActive");
  } else {
    outlinedTitleText.style.opacity = 0;
    outlinedTitleText.classList.remove("animateActive");
  }

  if (overviewSectionRect.y < 200) {
    titleBlock.style.opacity = 1;
    titleBlock.classList.add("animateActive");
  } else {
    titleBlock.style.opacity = 0;
    titleBlock.classList.remove("animateActive");
  }

  if (overviewSectionRect.y < 450) {
    imageArea.style.opacity = 1;
    imageArea.classList.add("animateActive");
  } else {
    imageArea.style.opacity = 0;
    imageArea.classList.remove("animateActive");
  }

  if (overviewSectionRect.y < 30) {
    overviewDesc.style.opacity = 1;
    overviewDesc.classList.add("animateActive");
  } else {
    overviewDesc.style.opacity = 0;
    overviewDesc.classList.remove("animateActive");
  }
});
