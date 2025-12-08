function animateBatteryCharge() {
  anime({
    targets: ".battery-level",

    // 1. Animate Width
    width: "100%", // Animate the width from 0% to 100%

    backgroundColor: "#ffffff", // White color (stays white throughout)

    // 3. Timing and Control
    duration: 3000, // Total duration of the animation (3 seconds)
    easing: "easeInOutQuad",
    delay: 500, // Wait half a second before starting
    loop: true, // Loop the animation
    direction: "alternate", // Go forward, then backward (simulate charge/drain)
  });
}

// Call the function to start the animation when the page loads
animateBatteryCharge();
