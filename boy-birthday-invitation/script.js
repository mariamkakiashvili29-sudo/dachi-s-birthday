const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const message = document.querySelector("#message");

// ორივე ღილაკი საბოლოოდ მხიარულ მოწვევას აჩვენებს.
// პასუხები არსად ინახება და სერვერზე არ იგზავნება.
function showInvitationMessage() {
  message.classList.add("show");
  message.innerHTML = `
    <span class="message-emoji">🎉</span>
    <strong>თქვენ აუცილებლად უნდა მოხვიდეთ!</strong>
    <p>მოემზადე მაგარი დაბადების დღისთვის! 🥳</p>
  `;

  yesButton.textContent = "🚀 შევთანხმდით!";
  noButton.textContent = "😄 კარგი, მოვდივარ!";
  yesButton.disabled = true;
  noButton.disabled = true;

  launchConfetti();
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function launchConfetti() {
  const symbols = ["✦", "★", "🚀", "•"];
  const colors = ["#ffd36e", "#73e1ff", "#b8a0ff", "#ffffff"];

  for (let i = 0; i < 45; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = `${12 + Math.random() * 13}px`;
    piece.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
    document.body.appendChild(piece);

    piece.addEventListener("animationend", () => piece.remove());
  }
}

yesButton.addEventListener("click", showInvitationMessage);
noButton.addEventListener("click", showInvitationMessage);
