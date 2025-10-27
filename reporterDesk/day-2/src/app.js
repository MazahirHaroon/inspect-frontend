const desk = { stories: [] };
let idCounter = 1;

const modal = document.getElementById('modal');
const newPitchBtn = document.getElementById('new-pitch-btn');
const modalCancel = document.getElementById('modal-cancel');
const pitchForm = document.getElementById('pitch-form');
const searchInput = document.getElementById('search');

let lastFocusedElement = null;

function openModal(editStory) {
  modal.classList.remove('hidden');
  console.log(modal.classList);
  const titleEl = document.getElementById('modalTitle');
  if (editStory) {
    titleEl.textContent = 'Edit Story';
    document.getElementById('pitch-id').value = editStory.id;
    document.getElementById('pitch-title').value = editStory.title;
    document.getElementById('pitch-summary').value = editStory.summary || '';
    document.getElementById('pitch-beat').value = editStory.beat || '';
    document.getElementById('pitch-tags').value = (editStory.tags || []).join(
      ','
    );
  } else {
    titleEl.textContent = 'New Pitch';
    pitchForm.reset();
    document.getElementById('pitch-id').value = '';
  }
  // focus first input
  document.getElementById('pitch-title').focus();
}

function closeModal() {
  modal.classList.add('hidden');
  pitchForm.reset();
  if (lastFocusedElement) lastFocusedElement.focus();
}

newPitchBtn.addEventListener('click', (e) => {
  lastFocusedElement = e.currentTarget;
  openModal();
});
modalCancel.addEventListener('click', () => closeModal());

function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// create card DOM with controls
function createStoryCard(story) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = story.id;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'article');
  card.setAttribute('aria-describedby', 'desc-' + story.id);

  const title = document.createElement('strong');
  title.textContent = story.title;
  card.appendChild(title);

  if (story.summary) {
    const p = document.createElement('p');
    p.id = 'desc-' + story.id;
    p.textContent = story.summary;
    card.appendChild(p);
  }

  const meta = document.createElement('div');
  meta.className = 'meta';
  const beat = document.createElement('div');
  beat.className = 'beat';
  beat.textContent = story.beat || '';
  meta.appendChild(beat);

  const controls = document.createElement('div');
  controls.className = 'controls';

  // Move right button
  const moveRight = document.createElement('button');
  moveRight.className = 'small-btn';
  moveRight.title = 'Move to next column';
  moveRight.textContent = '→';
  moveRight.addEventListener('click', () => {
    moveStory(story.id, 1);
  });
  controls.appendChild(moveRight);

  // Move left button
  const moveLeft = document.createElement('button');
  moveLeft.className = 'small-btn';
  moveLeft.title = 'Move to previous column';
  moveLeft.textContent = '←';
  moveLeft.addEventListener('click', () => {
    moveStory(story.id, -1);
  });
  controls.appendChild(moveLeft);

  // Edit button
  const edit = document.createElement('button');
  edit.className = 'small-btn';
  edit.title = 'Edit';
  edit.textContent = 'Edit';
  edit.addEventListener('click', (ev) => {
    lastFocusedElement = ev.currentTarget;
    openModal(story);
  });
  controls.appendChild(edit);

  // Delete button
  const del = document.createElement('button');
  del.className = 'small-btn';
  del.title = 'Delete';
  del.textContent = 'Delete';
  del.addEventListener('click', () => {
    if (confirm('Delete this story?')) {
      deleteStory(story.id);
    }
  });
  controls.appendChild(del);

  meta.appendChild(controls);
  card.appendChild(meta);

  return card;
}

const statuses = [
  'pitch',
  'assigned',
  'inprogress',
  'factcheck',
  'ready',
  'published',
];
function moveStory(id, step) {
  const s = desk.stories.find((x) => x.id === id);
  if (!s) return;
  const idx = statuses.indexOf(s.status || 'pitch');
  const next = Math.max(0, Math.min(statuses.length - 1, idx + step));
  s.status = statuses[next];
  renderDesk();
}

function deleteStory(id) {
  const idx = desk.stories.findIndex((x) => x.id === id);
  if (idx > -1) {
    desk.stories.splice(idx, 1);
    renderDesk();
  }
}

function addOrUpdateStory(story) {
  const existing = desk.stories.find((s) => s.id === story.id);
  if (existing) {
    Object.assign(existing, story);
  } else {
    desk.stories.push(story);
  }
  renderDesk();
}

function renderDesk(filterText = '') {
  const lists = document.querySelectorAll('.column-list');
  lists.forEach((l) => (l.innerHTML = ''));

  const q = filterText.trim().toLowerCase();
  desk.stories.forEach((story) => {
    if (q) {
      const hay = (
        story.title +
        ' ' +
        (story.summary || '') +
        ' ' +
        (story.beat || '') +
        ' ' +
        (story.tags || []).join(' ')
      ).toLowerCase();
      if (!hay.includes(q)) return;
    }
    const el = createStoryCard(story);
    const list = document.getElementById('list-' + (story.status || 'pitch'));
    if (list) list.appendChild(el);
  });
}

pitchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const id = document.getElementById('pitch-id').value || String(idCounter++);
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
    id,
    title,
    summary,
    beat,
    tags,
    status: 'pitch',
    versions: [],
    comments: [],
  };

  addOrUpdateStory(story);
  closeModal();
});

searchInput.addEventListener('input', (e) => {
  renderDesk(e.target.value);
});

// seed
addOrUpdateStory({
  id: String(idCounter++),
  title: 'Local park renovation',
  summary: 'Short summary for demo',
  beat: 'City',
  tags: ['community'],
  status: 'pitch',
  versions: [],
  comments: [],
});
addOrUpdateStory({
  id: String(idCounter++),
  title: 'School board meeting',
  summary: 'Discuss budget',
  beat: 'Education',
  tags: ['education'],
  status: 'assigned',
  versions: [],
  comments: [],
});

renderDesk();
