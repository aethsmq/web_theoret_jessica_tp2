function animateBatteryCharge() {
  anime({
    targets: ".battery-level",

    width: "100%",

    backgroundColor: "#ffffff",

    duration: 3000,
    easing: "easeInOutQuad",
    delay: 500,
    loop: true,
    direction: "alternate",
  });
}

animateBatteryCharge();
