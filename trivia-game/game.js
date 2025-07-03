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
  { name: "Modern Family", questions: { 10: [{q: "What planet is known as the Red Planet?", a: "Mars"}], 20: [{q: "What is the chemical symbol for water?", a: "H2O"}], 50: [{q: "What gas do plants absorb from the atmosphere?", a: "Carbon dioxide"}] } },
  { name: "Brooklyn Nine-Nine", questions: { 10: [{q: "Who was the first President of the USA?", a: "George Washington"}], 20: [{q: "In which year did World War II end?", a: "1945"}], 50: [{q: "Who wrote the Declaration of Independence?", a: "Thomas Jefferson"}] } },
  { name: "The Office", questions: { 10: [{q: "How many players in a soccer team?", a: "11"}], 20: [{q: "Which country won the 2018 FIFA World Cup?", a: "France"}], 50: [{q: "Who has won the most Olympic gold medals?", a: "Michael Phelps"}] } },
  { name: "How I Met Your Mother", questions: { 10: [{q: "What is the largest ocean on Earth?", a: "Pacific"}], 20: [{q: "Which country has the most population?", a: "China"}], 50: [{q: "What is the capital of Iceland?", a: "Reykjavik"}] } },
  { name: "Friends", questions: { 10: [{q: "Who played Harry Potter?", a: "Daniel Radcliffe"}], 20: [{q: "Which movie won Best Picture Oscar in 2020?", a: "Parasite"}], 50: [{q: "Who directed 'Inception'?", a: "Christopher Nolan"}] } },
  { name: "Seinfeld", questions: { 10: [{q: "Who is known as the King of Pop?", a: "Michael Jackson"}], 20: [{q: "Which band sang 'Hey Jude'?", a: "The Beatles"}], 50: [{q: "Who composed the Four Seasons?", a: "Vivaldi"}] } },
  { name: "Two and a Half Men", questions: { 10: [{q: "Who wrote 'Romeo and Juliet'?", a: "Shakespeare"}], 20: [{q: "Who is the author of 'Harry Potter'?", a: "J.K. Rowling"}], 50: [{q: "Who wrote 'War and Peace'?", a: "Leo Tolstoy"}] } },
  { name: "The Big Bang Theory", questions: { 10: [{q: "What does 'CPU' stand for?", a: "Central Processing Unit"}], 20: [{q: "Who founded Microsoft?", a: "Bill Gates"}], 50: [{q: "What year was the first iPhone released?", a: "2007"}] } },
  { name: "Taarak Mehta ka Ooltah Chashma", questions: { 10: [{q: "What fruit is used to make wine?", a: "Grape"}], 20: [{q: "Which country is famous for sushi?", a: "Japan"}], 50: [{q: "What is the main ingredient in hummus?", a: "Chickpeas"}] } }
];

// --- GAME LOGIC ---
const app = document.getElementById('app');

let state = {
  phase: 'select-topics', // 'select-topics', 'playing', 'finished'
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
  if (state.phase === 'select-topics') {
    renderTopicSelection();
  } else if (state.phase === 'playing') {
    renderProgressBar();
    renderGameGrid();
    renderScore();
    if (state.currentCell) renderModal();
  } else if (state.phase === 'finished') {
    renderGameGrid();
    renderScore();
    renderGameOver();
  }
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
    btn.innerHTML = `<img src="${SITCOM_LOGOS[topic.name]}" alt="${topic.name} logo" style="height:56px;width:110px;object-fit:contain;vertical-align:middle;background:#fff;padding:4px 8px;border-radius:10px;box-shadow:0 1px 4px #0001;display:block;">`;
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
    th.innerHTML = `<img src="${SITCOM_LOGOS[ALL_TOPICS[idx].name]}" alt="${ALL_TOPICS[idx].name} logo" style="height:56px;width:110px;object-fit:contain;vertical-align:middle;background:#fff;padding:4px 8px;border-radius:10px;box-shadow:0 1px 4px #0001;display:block;">`;
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
  const div = document.createElement('div');
  div.className = 'status';
  div.innerHTML = `<h2>Game Over!</h2>
    <div>Final Score: <b style='color:#43c6ac;'>${state.score}</b></div>
    <button id="restart-btn">Play Again</button>`;
  app.appendChild(div);
  document.getElementById('restart-btn').onclick = () => {
    state.phase = 'select-topics';
    state.selectedTopics = [];
    state.grid = [];
    state.score = 0;
    state.incorrect = 0;
    state.currentCell = null;
    state.message = '';
    render();
  };
}

// --- INIT ---
render();
