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

const plugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

// Pie Chart
const pieData = {
  datasets: [{
    label: 'My First Dataset',
    data: [80, 20],
    backgroundColor: ["#bd1622", "#d2d2d2"],
    hoverOffset: 4
  }]
};

const pieConfig = {
  type: 'doughnut',
  data: pieData,
  plugins: [plugin],
};

const pieChartCanvas = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pieChartCanvas, pieConfig)

// Horizontal Bar Chart
const barData = {
  labels: [
    "Best ROI",
    "Avg ROI",
    "Median ROI"
  ],
  datasets: [{
    label: 'ROI',
    data: [80, 20, 30],
    backgroundColor: ["#bd1622", "#bd1622", "#bd1622"],
  }]
};

const barConfig = {
  type: 'bar',
  data: barData,
  plugins: [plugin],
  options: {
    indexAxis: 'y',
  }
};

const barChartCanvas = document.getElementById("roiChart").getContext("2d");
const barChart = new Chart(barChartCanvas, barConfig)

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
