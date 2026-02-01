const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const errorText = document.getElementById("errorText");
const sadImg = document.getElementById("sadImg");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <h1>YAYYYYY 💖</h1>
      <p>You just made me really, really happy.</p>
    </div>
  `;
});

noBtn.addEventListener("click", () => {
  errorText.classList.remove("hidden");
  sadImg.classList.remove("hidden");
});
