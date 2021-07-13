Reveal.initialize();

Reveal.addEventListener("slidechanged", function (evt) {
  const { down } = Reveal.availableRoutes();
  if (down) {
    document.getElementById("custom-down").classList.remove("hidden");
    document.getElementById("custom-down").classList.add("visible");
  } else {
    document.getElementById("custom-down").classList.add("hidden");
    document.getElementById("custom-down").classList.remove("visible");
  }
  // console.log(Reveal.availableRoutes());
  // console.log(evt.currentSlide);
});

// const mQuery = window.matchMedia(
//   "screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)"
// );

// function handleMobilePhoneResize(e) {
//   // Check if the media query is true
//   if (e.matches) {
//     // var myobj = document.getElementById("test-js");
//     // myobj.setAttribute(
//     //   "data-background-image",
//     //   "images/Debox_Deck_Presentation-08.jpg"
//     // );
//     // myobj.remove();
//     var newElem = document.createElement("section");
//     newElem.id = "test-js-2";
//     newElem.setAttribute(
//       "data-background-image",
//       "images/Debox_Deck_Presentation-09.jpg"
//     );
//     newElem.setAttribute("data-background-size", "cover");
//     newElem.setAttribute("data-background-position", "center");
//     var s7 = document.getElementById("s7");
//     s7.prepend(newElem);
//   } else {
//     // var myobj = document.getElementById("test-js");
//     // myobj.setAttribute(
//     //   "data-background-image",
//     //   "images/Debox_Deck_Presentation-07.jpg"
//     // );
//     // myobj.remove();
//     var newElem = document.createElement("section");
//     newElem.id = "test-js-3";
//     newElem.setAttribute(
//       "data-background-image",
//       "images/Debox_Deck_Presentation-08.jpg"
//     );
//     newElem.setAttribute("data-background-size", "cover");
//     newElem.setAttribute("data-background-position", "center");
//     var s7 = document.getElementById("s7");
//     s7.prepend(newElem);
//   }
// }

// // Set up event listener
// mQuery.addListener(handleMobilePhoneResize);

// handleMobilePhoneResize(mQuery);
