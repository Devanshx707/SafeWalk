const alertButton = document.getElementById("alertButton");
const alertMessage = document.getElementById("alertMessage");
const tipButton = document.getElementById("tipButton");
const tipMessage = document.getElementById("tipMessage");

const tips = [
  "Share your live location with a trusted contact before traveling.",
  "Prefer well-lit main roads and avoid isolated shortcuts.",
  "Keep emergency numbers on speed dial and your phone charged.",
];

if (alertButton && alertMessage) {
  alertButton.addEventListener("click", () => {
    alertMessage.textContent =
      "Emergency alert template triggered. Connect this to real contact services.";
  });
}

if (tipButton && tipMessage) {
  tipButton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * tips.length);
    tipMessage.textContent = tips[index];
  });
}
