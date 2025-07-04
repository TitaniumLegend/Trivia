// --- SAMPLE DATA: Replace with your own questions/topics ---
// No emojis for topics
const SITCOM_LOGOS = {
  "Modern Family": "logos/modern-family.jpeg",
  "Brooklyn Nine-Nine": "logos/b99.jpeg",
  "The Office": "logos/office.png",
  "How I Met Your Mother": "logos/himym.png",
  "Friends": "logos/friends.png",
  "Seinfeld": "logos/seinfeld.png",
  "Two and a Half Men": "logos/tahm.png",
  "The Big Bang Theory": "logos/tbbt.png",
  "Taarak Mehta ka Ooltah Chashma": "logos/tmkoc.png"
};
const ALL_TOPICS = [
  { name: "Modern Family", questions: { 
    10: [
        {q: "What is the name of Jay's ex wife?", a: "DeDe"},
        {q: "What country does Gloria come from?", a: "Columbia"},
        {q: "What is the name of the business where Claire works with her father?", a: "Pritchett's Closets"}
    ], 
    20: [{q: "What is Cam's clown alter ego called?", a: "Fizbo"},
         {q: "What is Alex Dunphy's job?", a: "Academic Researcher"},
         {q: "As well as being a real estate agent, Phil owns what type of shop?", a: "Magic Shop"}
    ], 
    50: [{q: "Who officiated Mitch and Cam's wedding?", a: "Phil"},
         {q: "What was the name of Claire and Mitchell's childhood ice-skating duo?", a: "Fire and Nice"},
         {q: "Cam partners with Gloria to start a buisness selling _____", a: "Hot Sauce"}
    ] } },
  { name: "Brooklyn Nine-Nine", questions: {
    10: [{q: "What's the Pontiac Bandit's real name?", a: "Doug Judy"}, 
         {q: "What is the name of Charles Boyle's son?", a: "Nikolaj"},
         {q: "What is Gina's last name?", a: "Linetti"}         
    ], 
    20: [{q: "What is the name of Captain Holt's arch rival?", a: "Madeline Wuntch"},
         {q: "What is Scully's first name?", a: "Norm"},
         {q: "What is Hitchcock's first name?", a: "Michael"}
    ], 
    50: [{q: "Who did NOT win a halloween heist?", a: "Charles"},
         {q: "What were Jake and Holt's names while living in Florida?", a: "Larry and Greg"},
         {q: "What does Rosa's landlord think her name is?", a: "Emily Goldfinch"}
    ] } },
  { name: "The Office", questions: { 
    10: [{q: "What is the name of Jan's candle company?", a: "Serenity by Jan"},
         {q: "What vegetable does Dwight grow and sell at Schrute Farms?", a: "Beets"},
         {q: "What iconic landmark do Jim and Pam get married by?", a: "Niagara Falls"}
    ], 
    20: [{q: "What is the name of Michael Scott's movie?", a: "Threat Level Midnight"},
         {q: "What was the name of Angela's cat that was killed by Dwight?", a: "Sprinkles"},
         {q: "What is Oscar's job at Dunder Mifflin?", a: "Accountant"}
    ], 
    50: [{q: "What is Creed's job at Dunder Mifflin?", a: "Quality Assurance Manager"},
         {q: "What is the name of the cover band Kevin plays in?", a: "Scrantonicity"},
         {q: "What country does Toby leave Dunder Mifflin to visit?", a: "Costa Rica"} 
    ] } },
  { name: "How I Met Your Mother", questions: {
    10: [
      {q: "What college did Ted, Lily and Marshall all attend?", a: "Wesleyan University"},
      {q: "What year is it supposed to be when Ted is telling his two kids about how he met their mom?", a: "2030"},
      {q: "What is Lily's last name?", a: "Aldrin"}
    ],
    20: [
      {q: "What is Marshall's nickname?", a: "Big Fudge"},
      {q: "How many kids did Lily and Marshall end up having?", a: "Three"},
      {q: "Who did Barney end up marrying?", a: "Robin"}
    ],
    50: [
      {q: "Which character had a stripper doppelganger?", a: "Lily"},
      {q: "True or false: The Bro Code is a set of rules (i.e., male etiquette) established by Barney.", a: "True"},
      {q: "What are the names of Ted's children?", a: "Luke and Penny"}
    ]
  } },
  { name: "Friends", questions: {
    10: [
      {q: "Who does Ross marry in Las Vegas?", a: "Rachel"},
      {q: "What is Phoebe's sister called?", a: "Ursula"},
      {q: "What is Rachel wearing when she first appears in the 'Pilot' episode?", a: "Wedding Dress"}
    ],
    20: [
      {q: "Who teaches Rachel and Phoebe about 'Unagi'?", a: "Ross"},
      {q: "Which friend of her parents does Monica date?", a: "Richard"},
      {q: "What is Monica's job?", a: "Chef"}
    ],
    50: [
      {q: "What is Rachel's favourite movie?", a: "Weekend at Bernie's"},
      {q: "When Ben shows up with a Barbie doll, what doll does Ross want him to play with instead?", a: "GI Joe"},
      {q: "Who is Regina Philange?", a: "Phoebe"}
    ]
  } },
  { name: "Seinfeld", questions: { 10: [{q: "Who is known as the King of Pop?", a: "Michael Jackson"}], 20: [{q: "Which band sang 'Hey Jude'?", a: "The Beatles"}], 50: [{q: "Who composed the Four Seasons?", a: "Vivaldi"}] } },
  { name: "Two and a Half Men", questions: { 10: [{q: "Who wrote 'Romeo and Juliet'?", a: "Shakespeare"}], 20: [{q: "Who is the author of 'Harry Potter'?", a: "J.K. Rowling"}], 50: [{q: "Who wrote 'War and Peace'?", a: "Leo Tolstoy"}] } },
  { name: "The Big Bang Theory", questions: {
    10: [
      {q: "What's Sheldon's middle name?", a: "Lee"},
      {q: "How are Sheldon and Missy related?", a: "twins"},
      {q: "Where did Leonard go to college?", a: "Princeton"}
    ],
    20: [
      {q: "Which city in California is the show set in?", a: "Pasadena"},
      {q: "What state is Penny originally from?", a: "Nebraska"},
      {q: "What did Howard and Bernadette name their daughter?", a: "Halley"}
    ],
    50: [
      {q: "Who was Sheldon's childhood best friend?", a: "Tam"},
      {q: "Howard and Amy bonded over their mutual love of what singer?", a: "Neil Diamond"},
      {q: "What nickname did Howard's fellow astronauts give him?", a: "Froot Loops"}
    ]
  } },
  { name: "Taarak Mehta ka Ooltah Chashma", questions: {
    10: [
      {q: "What is the name of Jethalal’s village?", a: "Bhachau"},
      {q: "What is Dr. Hathi’s first name?", a: "Hansraj"},
      {q: "Who owns Gada Electronics?", a: "Jethalal Gada"}
    ],
    20: [
      {q: "Who is also known as Fire Brigade?", a: "Taarak Mehta"},
      {q: "Which society member was trapped in an online scam?", a: "Bhide"},
      {q: "Which is the best story arc according to me?", a: "Bhootni"}
    ],
    50: [
      {q: "What is Daya’s mother’s name?", a: "Jeevdaya"},
      {q: "Which society member is from Bhopal?", a: "Popatlal"},
      {q: "Whose flat do Jethalal and Sodhi bid for?", a: "Chandiramani"}
    ]
  } }
];


// --- JSONBIN.IO LEADERBOARD CONFIG ---
// TODO: Replace with your own bin ID and API key from jsonbin.io
const JSONBIN_BIN_ID = '6866934a8960c979a5b67aca';
const JSONBIN_API_KEY = '$2a$10$UXVh.OF2LOrUi1znDu2mDeb46ETKAqwhNP6/iTabSIf4WogsZp0Uq';
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

// --- GAME LOGIC ---
const app = document.getElementById('app');

let state = {
  phase: 'enter-name', // 'enter-name', 'select-topics', 'playing', 'finished'
  playerName: '',
  selectedTopics: [], // array of topic objects
  grid: [], // [{topic, points, question, answered: null|true|false}]
  score: 0,
  incorrect: 0,
  currentCell: null, // {row, col, ...}
  message: '',
};

function render() {
  app.innerHTML = '';
  renderHeader();
  if (state.phase === 'enter-name') {
    renderNameEntry();
  } else if (state.phase === 'select-topics') {
    renderTopicSelection();
    renderLeaderboardButton();
  } else if (state.phase === 'playing') {
    renderProgressBar();
    renderGameGrid();
    renderScore();
    if (state.currentCell) renderModal();
  } else if (state.phase === 'finished') {
    renderGameGrid();
    renderScore();
    renderGameOver();
  } else if (state.phase === 'leaderboard') {
    renderLeaderboard();
  }
function renderNameEntry() {
  const div = document.createElement('div');
  div.className = 'modal-content';
  div.style.margin = '48px auto';
  div.style.maxWidth = '400px';
  div.innerHTML = `
    <h2 style="color:#43c6ac;">Enter Your Name</h2>
    <input id="player-name-input" type="text" placeholder="Your name..." maxlength="18" style="padding:12px 18px;font-size:1.15em;border-radius:8px;border:1.5px solid #2ecc71;outline:none;width:80%;max-width:240px;" />
    <button id="name-continue-btn" class="start-btn" style="margin-top:18px;width:160px;">Continue</button>
  `;
  app.appendChild(div);
  const input = document.getElementById('player-name-input');
  input.focus();
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') document.getElementById('name-continue-btn').click();
  });
  document.getElementById('name-continue-btn').onclick = () => {
    const name = input.value.trim();
    if (!name) {
      input.focus();
      input.style.borderColor = '#e74c3c';
      return;
    }
    state.playerName = name;
    state.phase = 'select-topics';
    render();
  };
}
}

function renderLeaderboardButton() {
  const btn = document.createElement('button');
  btn.textContent = 'View Leaderboard';
  btn.className = 'start-btn';
  btn.style.marginTop = '18px';
  btn.onclick = () => {
    state.phase = 'leaderboard';
    render();
  };
  app.appendChild(btn);
}

function renderHeader() {
  const h = document.createElement('div');
  h.className = 'game-header';
  h.textContent = 'TRIVIA GRID GAME';
  app.appendChild(h);
}

function renderProgressBar() {
  const total = 9;
  const answered = state.grid.filter(c => c.answered !== null).length;
  const percent = Math.round((answered / total) * 100);
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  const inner = document.createElement('div');
  inner.className = 'progress-bar-inner';
  inner.style.width = percent + '%';
  bar.appendChild(inner);
  app.appendChild(bar);
}

function renderTopicSelection() {
  const div = document.createElement('div');
  div.innerHTML = `<h2 style="text-align:center; color:#1de9b6; font-size:2em; margin-bottom:24px;">Pick <span style='color:#43c6ac;'>3</span> Sitcoms</h2>`;
  const topicsDiv = document.createElement('div');
  topicsDiv.className = 'topics';
  ALL_TOPICS.forEach((topic, idx) => {
    const btn = document.createElement('button');
    btn.className = 'topic-btn' + (state.selectedTopics.includes(idx) ? ' selected' : '');
    btn.innerHTML = `<img src="${SITCOM_LOGOS[topic.name]}" alt="${topic.name} logo" style="height:56px;width:110px;object-fit:contain;vertical-align:middle;padding:4px 8px;border-radius:10px;box-shadow:0 1px 4px #0001;display:block;">`;
    btn.onclick = () => {
      if (state.selectedTopics.includes(idx)) {
        state.selectedTopics = state.selectedTopics.filter(i => i !== idx);
      } else if (state.selectedTopics.length < 3) {
        state.selectedTopics.push(idx);
      }
      render();
    };
    topicsDiv.appendChild(btn);
  });
  div.appendChild(topicsDiv);
  const startBtn = document.createElement('button');
  startBtn.textContent = 'Start Game';
  startBtn.disabled = state.selectedTopics.length !== 3;
  startBtn.className = 'start-btn';
  startBtn.onclick = startGame;
  div.appendChild(startBtn);
  app.appendChild(div);
}

function startGame() {
  // Build grid: 3 columns (topics), 3 rows (10,20,50)
  const points = [10, 20, 50];
  const grid = [];
  state.selectedTopics.forEach((topicIdx, col) => {
    const topic = ALL_TOPICS[topicIdx];
    points.forEach((pt, row) => {
      // Pick a random question for each cell
      const qList = topic.questions[pt];
      const qObj = qList[Math.floor(Math.random() * qList.length)];
      grid.push({
        topic: topic.name,
        points: pt,
        question: qObj.q,
        answer: qObj.a,
        row,
        col,
        answered: null // null = not answered, true = correct, false = wrong
      });
    });
  });
  state.grid = grid;
  state.phase = 'playing';
  state.score = 0;
  state.incorrect = 0;
  state.currentCell = null;
  state.message = '';
  render();
}

function renderGameGrid() {
  const gridDiv = document.createElement('div');
  gridDiv.className = 'grid';
  // Header row: sitcom logos
  state.selectedTopics.forEach(idx => {
    const th = document.createElement('div');
    th.className = 'header';
    th.innerHTML = `<img src="${SITCOM_LOGOS[ALL_TOPICS[idx].name]}" alt="${ALL_TOPICS[idx].name} logo" style="height:56px;width:110px;object-fit:contain;vertical-align:middle;padding:4px 8px;border-radius:10px;box-shadow:none;border:none;display:block;">`;
    gridDiv.appendChild(th);
  });
  // 3 rows: 10, 20, 50
  [0,1,2].forEach(row => {
    state.selectedTopics.forEach((topicIdx, col) => {
      const cell = state.grid.find(c => c.row === row && c.col === col);
      const cellDiv = document.createElement('div');
      cellDiv.className = 'cell';
      if (cell.answered === true) cellDiv.classList.add('answered-correct');
      if (cell.answered === false) cellDiv.classList.add('answered-wrong');
      if (cell.answered !== null || state.phase === 'finished') cellDiv.classList.add('disabled');
      cellDiv.textContent = cell.points;
      cellDiv.onclick = () => {
        if (cell.answered === null && !state.currentCell && state.phase === 'playing') {
          state.currentCell = cell;
          render();
        }
      };
      gridDiv.appendChild(cellDiv);
    });
  });
  app.appendChild(gridDiv);
}

function renderScore() {
  const div = document.createElement('div');
  div.className = 'score';
  div.innerHTML = `Score: <span style='color:#43c6ac;'>${state.score}</span> &nbsp; | &nbsp; Incorrect: <span style='color:#b71c1c;'>${state.incorrect}</span>/2`;
  app.appendChild(div);
  if (state.message) {
    const msg = document.createElement('div');
    msg.className = 'status' + (state.message.startsWith('Wrong!') ? ' wrong' : '');
    msg.textContent = state.message;
    app.appendChild(msg);
  }
}

// ...removed stray template string...
function renderModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  const content = document.createElement('div');
  content.className = 'modal-content';
  content.innerHTML = `<h2>${state.currentCell.topic} <span style='font-size:0.7em;color:#888;'>(${state.currentCell.points} pts)</span></h2>
    <div style="margin-bottom:16px;font-size:1.1em;">${state.currentCell.question}</div>
    <input type="text" id="answer-input" placeholder="Type your answer..." autocomplete="off" />
    <div style="margin-top:22px;">
      <button id="submit-answer">Submit</button>
      <button id="cancel-answer">Cancel</button>
    </div>`;
  modal.appendChild(content);
  document.body.appendChild(modal);
  document.getElementById('answer-input').focus();
  document.getElementById('submit-answer').onclick = submitAnswer;
  document.getElementById('cancel-answer').onclick = () => {
    state.currentCell = null;
    document.body.removeChild(modal);
    render();
  };
}

function submitAnswer() {
  const input = document.getElementById('answer-input');
  const userAns = input.value.trim().toLowerCase();
  const correctAns = state.currentCell.answer.trim().toLowerCase();
  let isCorrect = userAns === correctAns;
  // Allow minor variations (ignore case, whitespace)
  if (!isCorrect && correctAns.includes(userAns) && userAns.length > 2) isCorrect = true;
  // Update grid
  const idx = state.grid.findIndex(c => c.row === state.currentCell.row && c.col === state.currentCell.col);
  state.grid[idx].answered = isCorrect;
  if (isCorrect) {
    state.score += state.currentCell.points;
    state.message = 'Correct!';
  } else {
    state.incorrect += 1;
    state.message = `Wrong! Correct answer: ${state.currentCell.answer}`;
  }
  state.currentCell = null;
  // Remove modal
  document.querySelector('.modal').remove();
  // Check for end
  if (state.incorrect >= 2 || state.grid.every(c => c.answered !== null)) {
    state.phase = 'finished';
  }
  render();
}

// ...removed duplicate template string...
function renderGameOver() {
  // Only show confetti if the user did NOT lose by 2 incorrect answers
  if (state.incorrect < 2) {
    let confetti = document.getElementById('confetti-canvas');
    if (!confetti) {
      confetti = document.createElement('canvas');
      confetti.id = 'confetti-canvas';
      confetti.style.position = 'fixed';
      confetti.style.top = 0;
      confetti.style.left = 0;
      confetti.style.width = '100vw';
      confetti.style.height = '100vh';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = 2000;
      document.body.appendChild(confetti);
    }
    startConfetti();
  }
  const div = document.createElement('div');
  div.className = 'status';
  div.innerHTML = `<h2>Game Over!</h2>
    <div>Final Score: <b style='color:#43c6ac;'>${state.score}</b></div>
    <div class="gameover-btn-row">
      <button id="save-score-btn" class="start-btn">Save Score</button>
      <button id="restart-btn" class="start-btn">Play Again</button>
    </div>`;
  app.appendChild(div);
  document.getElementById('restart-btn').onclick = () => {
    stopConfetti();
    let confetti = document.getElementById('confetti-canvas');
    if (confetti) confetti.remove();
    state.phase = 'select-topics';
    state.selectedTopics = [];
    state.grid = [];
    state.score = 0;
    state.incorrect = 0;
    state.currentCell = null;
    state.message = '';
    render();
  };
  document.getElementById('save-score-btn').onclick = () => {
    document.getElementById('save-score-btn').disabled = true;
    submitScoreToLeaderboard(state.playerName, state.score);
  };
}



// promptAndSubmitScore is now unused

async function submitScoreToLeaderboard(name, score) {
  try {
    // Fetch current leaderboard
    const res = await fetch(JSONBIN_URL + '/latest', {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    });
    const data = await res.json();
    let leaderboard = (data.record && data.record.leaderboard) ? data.record.leaderboard : [];
    leaderboard.push({ name, score, date: new Date().toISOString() });
    leaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10); // top 10
    // Update leaderboard
    await fetch(JSONBIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: JSON.stringify({ leaderboard })
    });
    alert('Score submitted!');
    state.phase = 'leaderboard';
    render();
  } catch (e) {
    alert('Failed to submit score. Please try again.');
  }
}

async function fetchLeaderboard() {
  try {
    const res = await fetch(JSONBIN_URL + '/latest', {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    });
    const data = await res.json();
    return (data.record && data.record.leaderboard) ? data.record.leaderboard : [];
  } catch (e) {
    return [];
  }
}


function renderLeaderboard() {
  app.innerHTML = '';
  renderHeader();
  // Leaderboard container overlay
  const overlay = document.createElement('div');
  overlay.className = 'leaderboard-overlay';
  overlay.innerHTML = `
    <div class="leaderboard-card">
      <div class="leaderboard-header">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;margin-right:10px;"><circle cx="12" cy="12" r="12" fill="#2ecc71"/><path d="M12 6l2.09 4.26L18 11.27l-3.18 2.73L15.18 18 12 15.77 8.82 18l.36-4-3.18-2.73 3.91-.01L12 6z" fill="#fff"/></svg>
        <h2>Leaderboard</h2>
      </div>
      <div id="leaderboard-list" class="leaderboard-list">Loading...</div>
      <button class="start-btn leaderboard-back-btn" id="back-btn">Back to Game</button>
    </div>
  `;
  app.appendChild(overlay);
  document.getElementById('back-btn').onclick = () => {
    state.phase = 'select-topics';
    render();
  };
  fetchLeaderboard().then(list => {
    const listDiv = document.getElementById('leaderboard-list');
    if (!list.length) {
      listDiv.innerHTML = '<div class="no-scores">No scores yet.</div>';
      return;
    }
    listDiv.innerHTML = `
      <table class="leaderboard-table">
        <thead><tr><th>#</th><th>Name</th><th>Score</th><th>Date</th></tr></thead>
        <tbody>
          ${list.map((e, i) => `
            <tr${i === 0 ? ' class="top-score"' : ''}>
              <td>${i + 1}</td>
              <td>${e.name}</td>
              <td>${e.score}</td>
              <td>${new Date(e.date).toLocaleDateString()}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  });
}


// --- Confetti Animation ---
let confettiActive = false;
let confettiParticles = [];
function startConfetti() {
  confettiActive = true;
  confettiParticles = [];
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (let i = 0; i < 120; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      r: 6 + Math.random() * 8,
      d: 2 + Math.random() * 2,
      color: confettiColor(),
      tilt: Math.random() * 10 - 5,
      tiltAngle: 0,
      tiltAngleInc: (Math.random() * 0.07) + 0.05
    });
  }
  requestAnimationFrame(drawConfetti);
}
function stopConfetti() {
  confettiActive = false;
}
function confettiColor() {
  const palette = ['#2ecc71','#eafaf1','#43c6ac','#1de9b6','#e74c3c','#31363f'];
  return palette[Math.floor(Math.random()*palette.length)];
}
function drawConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas || !confettiActive) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let i = 0; i < confettiParticles.length; i++) {
    let p = confettiParticles[i];
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.r, p.r/2, p.tilt, 0, 2*Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.d;
    p.tilt += p.tiltAngleInc;
    if (p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = -10;
      p.color = confettiColor();
    }
  }
  if (confettiActive) requestAnimationFrame(drawConfetti);
}

// --- INIT ---
render();
