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
});

const mQuery = window.matchMedia(
  "screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)"
);

function handleMobilePhoneResize(e) {
  // const s7 = document.getElementById("sm-main");
  // const s7M = document.getElementById("sm-main-mobile");
  // // Check if the media query is true
  // if (e.matches) {
  //   s7M.removeAttribute("data-visibility");
  //   s7.setAttribute("data-visibility", "hidden");
  // } else {
  //   s7.removeAttribute("data-visibility");
  //   s7M.setAttribute("data-visibility", "hidden");
  // }
}

// Set up event listener
mQuery.addListener(handleMobilePhoneResize);

handleMobilePhoneResize(mQuery);
