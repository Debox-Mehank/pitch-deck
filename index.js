Reveal.initialize({
  controls: false,
});

const buttonLeft = document.getElementById("navigate-left");
const buttonRight = document.getElementById("navigate-right");
const buttonUp = document.getElementById("navigate-up");
const buttonDown = document.getElementById("navigate-down");

const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");

Reveal.addEventListener("slidechanged", function (evt) {
  const { up, down, left, right } = Reveal.availableRoutes();

  const currentSlide = Reveal.getCurrentSlide();
  const { h, v, f } = Reveal.getIndices((slide = currentSlide));

  console.log(h, v);

  // Down
  if (down) {
    rightArrow.setAttribute("src", "images/Arrow_Black.png");
    if (
      (h === 7 && v === 0) ||
      (h === 8 && v === 0) ||
      (h === 11 && v === 0) ||
      (h === 12 && v === 0)
    ) {
      downArrow.setAttribute("src", "images/White_Arrow.gif");
    } else {
      downArrow.setAttribute("src", "images/Arrow_Red.gif");
    }
    buttonDown.style.opacity = 1;
  } else {
    buttonDown.style.opacity = 0;
  }

  // Up And Not Down
  if (up && !down) {
    rightArrow.setAttribute("src", "images/Arrow_Red.gif");
  }

  // Not Up And Not Down
  if (!up && !down) {
    rightArrow.setAttribute("src", "images/Arrow_Red.gif");
  }

  // Up
  if (up) {
    buttonUp.style.opacity = 1;
  } else {
    buttonUp.style.opacity = 0;
  }

  // Left
  if (left) {
    buttonLeft.style.opacity = 1;
  } else {
    buttonLeft.style.opacity = 0;
  }

  // Right
  if (right) {
    buttonRight.style.opacity = 1;
  } else {
    buttonRight.style.opacity = 0;
  }
});

const handleLeft = (e) => {
  e.preventDefault();
  Reveal.left();
};
const handleRight = (e) => {
  e.preventDefault();
  Reveal.right();
};
const handleUp = (e) => {
  e.preventDefault();
  Reveal.up();
};
const handleDown = (e) => {
  e.preventDefault();
  Reveal.down();
};

// const handleNext = (e) => {
//   e.preventDefault();
//   if (Reveal.isVerticalSlide()) {
//     const { up, down, left, right } = Reveal.availableRoutes();
//     if (down) {
//       Reveal.next();
//     } else {
//       Reveal.ri;
//     }
//   }
// };

// const handlePrev = (e) => {
//   console.log(Reveal.isVerticalSlide());
//   e.preventDefault();
//   Reveal.prev();
// };

buttonLeft.addEventListener("click", handleLeft);
buttonRight.addEventListener("click", handleRight);
buttonUp.addEventListener("click", handleUp);
buttonDown.addEventListener("click", handleDown);
