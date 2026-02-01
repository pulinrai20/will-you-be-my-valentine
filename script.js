const app = document.getElementById("app");
let history = [];

/* ================= QUIZ DATA ================= */

const quiz = [
  {
    q: "What do I enjoy more?",
    options: [
      { text: "Late night talks", correct: true, img: "correct1.jpg", msg: "I sleep a lot but i prefer this 😚😚" },
      { text: "Early mornings", correct: false, img: "wrong1.jpg", msg: "I'd love to sleep at this time 😴" }
    ]
  },
  {
    q: "Would you sing for me or your bestfriend?",
    options: [
      { text: "Bestfriend", correct: false, img: "wrong2.jpg", msg: "WOW, still not me ha 💔" },
      { text: "Me", correct: true, img: "correct2.jpg", msg: "You better send me multiple vns singing today 🎶💖" }
    ]
  },
  {
    q: "Did you find any nickname for me?",
    options: [
      { text: "No", correct: false, img: "wrong3.jpg", msg: "Okay, i guess 😶" },
      { text: "Yes", correct: true, img: "correct3.jpg", msg: "Now I’m curious, text me the Nickname👀💖" }
    ]
  },
  {
    q: "Whom do you love the most?",
    options: [
      { text: "Pulin", correct: true, img: "correct4.jpg", msg: "Correct answer 😌" },
      { text: "Pulin (you don't have a choice)", correct: true, img: "correct4.jpg", msg: "Forced… but accepted 😏❤️" }
    ]
  }
];

/* ================= QUIZ RENDER ================= */

function renderQuiz(index) {
  const q = quiz[index];

  app.innerHTML = `
    <div class="screen quiz">
      <h1>${q.q}</h1>
      ${q.options
        .map(
          (o, i) =>
            `<button onclick="answer(${index}, ${i})">${o.text}</button>`
        )
        .join("")}
    </div>
  `;
}

/* ================= ANSWER HANDLER ================= */

function answer(qIndex, optIndex) {
  const opt = quiz[qIndex].options[optIndex];
  history.push(() => renderQuiz(qIndex));

  app.innerHTML = `
    <div class="screen ${opt.correct ? "correct" : "wrong"}">
      <h1>${opt.msg}</h1>
      <img src="${opt.img}" class="result-img">
      <div class="nav-buttons">
        <button onclick="goBack()">⬅ Back</button>
        <button onclick="nextQuestion(${qIndex})">Next ➡</button>
      </div>
    </div>
  `;
}

/* ================= NAVIGATION ================= */

function nextQuestion(index) {
  if (index + 1 < quiz.length) {
    renderQuiz(index + 1);
  } else {
    renderValentine();
  }
}

function goBack() {
  const last = history.pop();
  if (last) last();
}

/* ================= VALENTINE QUESTION ================= */

function renderValentine() {
  app.innerHTML = `
    <div class="screen valentine">
      <h1>Indu, will you be my Valentine? 🌹</h1>
      <img id="valImg" src="questioning.jpg">
      <div>
        <button id="yesBtn">Yes ❤️</button>
        <button id="noBtn">No 💔</button>
      </div>
      <p id="warning"></p>
    </div>
  `;

  const img = document.getElementById("valImg");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const warning = document.getElementById("warning");

  yesBtn.onmouseover = () => (img.src = "excited.jpg");
  noBtn.onmouseover = () => (img.src = "cryingcat.jpg");

  yesBtn.onclick = showFinal;

  noBtn.onclick = () => {
    warning.textContent = "You don’t love me? Choose again.";
    noBtn.remove();
    img.src = "questioning.jpg";
  };
}

/* ================= FINAL PAGE ================= */

function showFinal() {
  app.innerHTML = `
    <div class="screen final correct">
      <h1>You said YES 💖</h1>
      <p>
        That means more to me than you know.<br>
        I’m a little busy right now with work and exams,<br>
        but I promise I’ll plan something special soon.
      </p>
      <img src="celebration.gif" class="result-img">
      <p><strong>I love you, Indu.</strong></p>
    </div>
  `;
}

/* ================= START ================= */

renderQuiz(0);
