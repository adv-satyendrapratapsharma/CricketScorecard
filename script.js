let batting = "Anant";
let innings = 1;

let runs = 0;
let balls = 0;
let fours = 0;
let sixes = 0;

let anant = {};
let satyendra = {};

function updateUI() {
  let overs = Math.floor(balls / 6);
  let ballsInOver = balls % 6;

  document.getElementById("batting").innerText = "Batting: " + batting;
  document.getElementById("score").innerText = "Score: " + runs;
  document.getElementById("balls").innerText =
    "Balls: " + balls + " | Overs: " + overs + "." + ballsInOver;
  document.getElementById("foursSixes").innerText =
    "Fours: " + fours + " | Sixes: " + sixes;
}

function addBall() {
  balls++;
  updateUI();
}

function four() {
  runs += 4;
  fours++;
  addBall();
}

function six() {
  runs += 6;
  sixes++;
  addBall();
}

function dot() {
  addBall();
}

function wide() {
  runs += 1;
  updateUI();
}

function noBall() {
  runs += 1;
  updateUI();
}

function out() {
  addBall();

  if (innings === 1) {
    anant = { runs, balls, fours, sixes };
    innings = 2;
    batting = "Satyendra";
    resetInnings();
  } else {
    satyendra = { runs, balls, fours, sixes };
    showSummary();
  }
}

function resetInnings() {
  runs = 0;
  balls = 0;
  fours = 0;
  sixes = 0;
  updateUI();
}

function showSummary() {
  let result =
    satyendra.runs >= anant.runs + 1
      ? "🏆 Satyendra WON"
      : `🏆 Anant WON by ${anant.runs - satyendra.runs} runs`;

  document.body.innerHTML = `
    <div class="container">
      <div class="scoreboard">
        <h2>MATCH SUMMARY</h2>
        <p><b>Anant:</b> ${anant.runs} (${anant.balls} balls)</p>
        <p>Fours: ${anant.fours} | Sixes: ${anant.sixes}</p>
        <hr>
        <p><b>Satyendra:</b> ${satyendra.runs} (${satyendra.balls} balls)</p>
        <p>Fours: ${satyendra.fours} | Sixes: ${satyendra.sixes}</p>
        <hr>
        <h3>${result}</h3>
        <button onclick="location.reload()">NEW MATCH</button>
      </div>
    </div>
  `;
}

updateUI();
