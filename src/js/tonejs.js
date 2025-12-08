import * as Tone from "https://esm.sh/tone@15.1.22";

const player = new Tone.Player("assets/audio/HESONOO.mp4").toDestination();

document.querySelector("button").addEventListener("click", async () => {
  await Tone.start();

  Tone.loaded().then(() => {
    player.start();
  });
});
