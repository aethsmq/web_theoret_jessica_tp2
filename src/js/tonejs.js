import * as Tone from "https://esm.sh/tone@15.1.22";

// Replace 'path/to/your/song.mp3' with the correct location of your file
const player = new Tone.Player("assets/audio/HESONOO.mp4").toDestination();

document.querySelector("button").addEventListener("click", async () => {
  // Start the audio context (required on first user interaction)
  await Tone.start();

  // Use Tone.loaded() to ensure the audio file is ready before playing
  Tone.loaded().then(() => {
    player.start();
  });
});
