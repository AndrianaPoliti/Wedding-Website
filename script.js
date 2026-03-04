// Αντίστροφη μέτρηση
const weddingDate = new Date("July 9, 2026 18:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";

}, 1000);

// Ήχος
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const muteBtn = document.getElementById("muteBtn");
  const wave1 = document.getElementById("wave1");
  const wave2 = document.getElementById("wave2");

  // Ξεκινάει μουσική όταν γίνει click στο seal
  const seal = document.getElementById("seal");
  seal.addEventListener("click", () => {
    music.volume = 0.5;
    music.play().catch(e => console.log("Autoplay blocked:", e));
  });

  // Κουμπί mute/unmute
  muteBtn.addEventListener("click", () => {
    // Αν η μουσική δεν έχει ξεκινήσει, ξεκίνησέ την
    if (music.paused) {
      music.volume = 0.5;
      music.play().catch(e => console.log("Autoplay blocked:", e));
    }

    // Εναλλαγή mute
    music.muted = !music.muted;

    if (music.muted) {
      wave1.style.display = "none";
      wave2.style.display = "none";
    } else {
      wave1.style.display = "block";
      wave2.style.display = "block";
    }
  });
});