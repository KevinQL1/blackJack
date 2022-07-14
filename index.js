const cards = [
  { card: "A", prize: 500, score: 1 },
  { card: 2, prize: 100, score: 2 },
  { card: 3, prize: 100, score: 3 },
  { card: 4, prize: 100, score: 4 },
  { card: 5, prize: 100, score: 5 },
  { card: 6, prize: 100, score: 6 },
  { card: 7, prize: 100, score: 7 },
  { card: 8, prize: 100, score: 8 },
  { card: 9, prize: 100, score: 9 },
  { card: 10, prize: 100, score: 10 },
  { card: "J", prize: 500, score: 11 },
  { card: "Q", prize: 500, score: 12 },
  { card: "K", prize: 500, score: 13 },
];
const cardsNew = [];
const tbody = document.getElementById("cardsList");
const drawButton = document.getElementById("drawButton");

drawButton.addEventListener("click", renderCards);

const randArray = () => {
  const rand = Math.floor(Math.random() * cards.length);
  const rValue = cards[rand];
  cardsNew.push(rValue);
  return rValue;
};

const newGame = () => {
  Location.reload();
};

function renderCards() {
  let scoreTotal = 0;
  let prizeTotal = 0;
  tbody.innerHTML = "";
  randArray();
  cardsNew.map((cardNew) => {
    const tr = document.createElement("tr");
    tr.classList.add("cardNew");
    scoreTotal = scoreTotal + cardNew.score;
    prizeTotal = prizeTotal + cardNew.prize;
    if (scoreTotal == 21) {
      drawButton.style.visibility = "hidden";
      const total = prizeTotal + 1000;
      swal.fire({
        icon: "success",
        title: "You win: $" + total,
        text: "Por ser un feliz ganador se te otorga $1000 más",
      });
    } else if (scoreTotal < 21) {
      swal.fire({
        icon: "info",
        title: "PUJA MÁS, vas ganando: $" + prizeTotal,
        timer: 5000,
      });
    } else {
      drawButton.style.visibility = "hidden";
      swal.fire({
        icon: "error",
        title: "lost: $" + prizeTotal,
        timer: 5000,
      });
    }
    const Content = `
   <tr>
       <th>${cardNew.card}</th>
       <th>${scoreTotal}</th>
       <th>${prizeTotal}</th>
   </tr>      
        `;
    tr.innerHTML = Content;
    tbody.append(tr);
    console.log(cardNew);
  });
}
