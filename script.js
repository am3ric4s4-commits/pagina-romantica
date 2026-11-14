const letterMessage =
  "Quiero que sepas que desde que llegaste a mi vida, mis días son más bonitos. " +
  "Me encanta reír contigo, compartir momentos y descubrir todo lo que podemos ser. " +
  "No sé qué nos depare el futuro, pero sí sé que quiero seguir caminando a tu lado. " +
  "Por eso, hoy quiero preguntarte algo muy especial...";

const openLetterButton = document.getElementById("openLetter");
const letterPanel = document.getElementById("letterPanel");
const letterText = document.getElementById("letterText");
const proposal = document.getElementById("proposal");
const yesButton = document.getElementById("yesButton");
const afterYes = document.getElementById("afterYes");
const celebration = document.getElementById("celebration");
const afterPhoto = document.getElementById("afterPhoto");
const photoPlaceholder = document.getElementById("photoPlaceholder");

let letterIndex = 0;
let counterInterval;

openLetterButton.addEventListener("click", () => {
  openLetterButton.hidden = true;
  letterPanel.hidden = false;
  letterPanel.scrollIntoView({ behavior: "smooth", block: "center" });

  letterIndex = 0;
  letterText.textContent = "";
  writeLetter();
});

function writeLetter() {
  if (letterIndex < letterMessage.length) {
    letterText.textContent += letterMessage.charAt(letterIndex);
    letterIndex++;
    window.setTimeout(writeLetter, 42);
  } else {
    letterText.classList.add("typing-finished");
    proposal.hidden = false;
    proposal.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

yesButton.addEventListener("click", () => {
  yesButton.disabled = true;
  celebration.hidden = false;
  createCelebration();

  window.setTimeout(() => {
    celebration.hidden = true;
    afterYes.hidden = false;
    startCounter();
    afterYes.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 2600);
});

function createCelebration() {
  celebration.replaceChildren();

  for (let i = 0; i < 55; i++) {
    const particle = document.createElement("span");
    const isHeart = Math.random() > 0.35;

    particle.className = `particle ${isHeart ? "heart" : "sparkle"}`;
    particle.textContent = isHeart ? "♥" : "✦";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${2 + Math.random() * 2.5}s`;
    particle.style.animationDelay = `${Math.random() * 1.2}s`;
    particle.style.fontSize = `${14 + Math.random() * 22}px`;

    celebration.appendChild(particle);
  }
}

function startCounter() {
  // El contador inicia el 13 de noviembre de 2026, a medianoche, hora local.
  const relationshipStart = new Date(2026, 10, 13, 0, 0, 0).getTime();

  function updateCounter() {
    let elapsed = Math.max(0, Date.now() - relationshipStart);

    const days = Math.floor(elapsed / 86400000);
    elapsed %= 86400000;

    const hours = Math.floor(elapsed / 3600000);
    elapsed %= 3600000;

    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    document.getElementById("days").textContent = String(days);
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  updateCounter();
  window.clearInterval(counterInterval);
  counterInterval = window.setInterval(updateCounter, 1000);
}

function showPhotoPlaceholder() {
  afterPhoto.hidden = true;
  photoPlaceholder.hidden = false;
}

afterPhoto.addEventListener("error", showPhotoPlaceholder);

if (afterPhoto.complete && afterPhoto.naturalWidth === 0) {
  showPhotoPlaceholder();
}
const introText = "Hay algo que quiero decirte...";
const introElement = document.getElementById("typedIntro");

let introIndex = 0;

function typeIntro() {
  if (!introElement || introIndex >= introText.length) return;

  introElement.textContent += introText.charAt(introIndex);
  introIndex++;
  setTimeout(typeIntro, 75);
}

typeIntro();