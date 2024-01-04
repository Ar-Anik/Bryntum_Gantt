import { Scheduler } from "https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js";

const scheduler = new Scheduler({
  appendTo: "scheduler",
  height: 600,
});

let currentZoomLevel = 0; // Assuming 0 as the default zoom level

function zoomIn() {
  scheduler.zoomIn();
  currentZoomLevel++;
}

function zoomOut() {
  if (currentZoomLevel > 0) {
    scheduler.zoomOut();
    currentZoomLevel--;
  }
}

document.getElementById("zoomInButton").addEventListener("click", zoomIn);
document.getElementById("zoomOutButton").addEventListener("click", zoomOut);
