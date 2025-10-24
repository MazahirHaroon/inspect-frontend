// Simple in-memory model
const desk = { stories: [] };
let idCounter = 1;

const modal = document.getElementById('modal');
const newPitchBtn = document.getElementById('new-pitch-btn');
const modalCancel = document.getElementById('modal-cancel');
const pitchForm = document.getElementById('pitch-form');

function openModal() {
  modal.classList.remove('hidden');
  document.getElementById('pitch-title').focus();
}
function closeModal() {
  modal.classList.add('hidden');
  pitchForm.reset();
}

newPitchBtn.addEventListener('click', openModal);
modalCancel.addEventListener('click', closeModal);

function createStoryCard(story) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = story.id;

  const title = document.createElement('strong');
  title.textContent = story.title;
  card.appendChild(title);

  if (story.summary) {
    const p = document.createElement('p');
    p.textContent = story.summary;
    card.appendChild(p);
  }

  const beat = document.createElement('div');
  beat.className = 'beat';
  beat.textContent = story.beat || '';
  card.appendChild(beat);

  return card;
}

function addStory(story) {
  desk.stories.push(story);
  renderDesk();
}

function renderDesk() {
  // clear lists
  const lists = document.querySelectorAll('.column-list');
  lists.forEach((l) => (l.innerHTML = ''));

  desk.stories.forEach((story) => {
    const el = createStoryCard(story);
    const list = document.getElementById('list-' + (story.status || 'pitch'));
    if (list) list.appendChild(el);
  });
}

pitchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('pitch-title').value.trim();
  if (!title) return;
  const summary = document.getElementById('pitch-summary').value.trim();
  const beat = document.getElementById('pitch-beat').value.trim();
  const tags = document
    .getElementById('pitch-tags')
    .value.split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const story = {
    id: String(idCounter++),
    title,
    summary,
    beat,
    tags,
    status: 'pitch',
    versions: [],
    comments: [],
  };
  addStory(story);
  closeModal();
});

// seed example to show it works
addStory({
  id: String(idCounter++),
  title: 'Local park renovation',
  summary: 'Short summary for demo',
  beat: 'City',
  tags: ['community'],
  status: 'pitch',
  versions: [],
  comments: [],
});

addStory({
  id: String(idCounter++),
  title: 'School board meeting',
  summary: 'Discuss budget',
  beat: 'Education',
  tags: ['education'],
  status: 'assigned',
  versions: [],
  comments: [],
});

// Initial render
renderDesk();
