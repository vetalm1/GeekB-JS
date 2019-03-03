document.head.insertAdjacentHTML(
  "afterbegin",
  '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">'
);

let slider = document.querySelector(".slider");

let leftArrow = document.createElement("i");
leftArrow.classList.add("fas", "fa-chevron-circle-left", "slider-leftArrow");
slider.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement("i");
rightArrow.classList.add("fas", "fa-chevron-circle-right", "slider-rightArrow");
slider.insertAdjacentElement("beforeend", rightArrow);

let sliderImg = document.querySelector(".slider-item img");

let images = {
  currentIdx: 0,
  images: [],
  init(arr) {
    this.images = arr;
    this.setImage();
    this.setSizes();
  },
  setSizes() {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
      slider.style.width = width;
    }
    if (height !== null && height !== "") {
      slider.style.height = height;
    }
  },
  setNexLeftImage() {
    if (this.currentIdx == 0) {
      this.currentIdx = this.images.length - 1;
    } else {
      this.currentIdx--;
    }
    this.setImage();
  },
  setNextRightImage() {
    if (this.currentIdx == this.images.length - 1) {
      this.currentIdx = 0;
    } else {
      this.currentIdx++;
    }
    this.setImage();
  },
  setImage() {
    sliderImg.setAttribute("src", this.images[this.currentIdx].src);
    sliderImg.setAttribute("onerror", "imgError()");
    
    
    
  }
};

leftArrow.addEventListener("click", function() {
  images.setNexLeftImage();
});

rightArrow.addEventListener("click", function() {
  images.setNextRightImage();
});

function imgError() {
    sliderImg.setAttribute("src", "404.png");
};