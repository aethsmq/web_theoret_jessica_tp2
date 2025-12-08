import Zdog from "zzz";

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  zoom: 1,
  resize: true,
});

const circle = new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  fill: true,
  color: "#163da791",
  stroke: false,
});

function animate() {
  circle.rotate.y += 0.01;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
