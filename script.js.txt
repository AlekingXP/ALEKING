const fullHeart = document.getElementById("fullHeart");
const leftHalf = document.getElementById("leftHalf");
const rightHalf = document.getElementById("rightHalf");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const rain = document.getElementById("rain");

let progress = 0;
const MAX = 6;

// Al tocar el corazón lleno
fullHeart.addEventListener("click", () => {
  // animación de latido
  fullHeart.style.transform = "rotate(-45deg) scale(1.3)";
  setTimeout(() => {
    fullHeart.style.transform = "rotate(-45deg) scale(1)";
  }, 300);

  // partículas
  spawnParticles("❤️");

  // juntar el corazón roto
  if (progress < MAX) {
    progress++;
    let move = 40 - (progress * 40 / MAX);
    leftHalf.style.transform = `translateX(${-move}px) rotate(${-(15 - progress*2)}deg)`;
    rightHalf.style.transform = `translateX(${move}px) rotate(${15 - progress*2}deg)`;
  }

  // al unir, mostrar carta
  if (progress === MAX) {
    setTimeout(() => {
      modal.style.display = "flex";
    }, 600);
  }
});

// cerrar carta
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  progress = 0;
  leftHalf.style.transform = "translateX(-40px) rotate(-15deg)";
  rightHalf.style.transform = "translateX(40px) rotate(15deg)";
});

// Partículas al tocar
function spawnParticles(emoji) {
  for (let i = 0; i < 8; i++) {
    const span = document.createElement("span");
    span.textContent = emoji;
    span.style.position = "absolute";
    span.style.left = fullHeart.offsetLeft + 60 + "px";
    span.style.top = fullHeart.offsetTop + 60 + "px";
    span.style.fontSize = "20px";
    span.style.opacity = 1;
    document.body.appendChild(span);

    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;

    span.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${x}px,${y}px)`, opacity: 0 }
    ], {
      duration: 1000,
      easing: "ease-out"
    });

    setTimeout(() => span.remove(), 1000);
  }
}

// Lluvia de corazones/estrellas/ositos
const EMOJIS = ["❤️", "💖", "⭐", "🧸"];
function spawnRain() {
  const drop = document.createElement("div");
  drop.className = "drop";
  drop.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.fontSize = (20 + Math.random()*20) + "px";
  const duration = 4 + Math.random() * 6;
  drop.style.animationDuration = duration + "s";
  rain.appendChild(drop);

  setTimeout(() => drop.remove(), duration * 1000);
}
setInterval(spawnRain, 300);
