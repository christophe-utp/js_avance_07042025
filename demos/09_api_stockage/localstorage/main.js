const noteInput = document.getElementById('noteInput');
const noteText = document.getElementById('noteText');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const deleteNoteBtn = document.getElementById('deleteNoteBtn');

const userName = document.getElementById('userName');
const userMessage = document.getElementById('userMessage');
const objectDisplay = document.getElementById('objectDisplay');
const saveObjectBtn = document.getElementById('saveObjectBtn');
const deleteObjectBtn = document.getElementById('deleteObjectBtn');

const NOTE_KEY = 'ma_note';
const OBJECT_KEY = 'mon_objet';

// Gestion note simple
function chargerNote() {
  const note = localStorage.getItem(NOTE_KEY);
  if (note) {
    noteText.textContent = note;
    noteInput.value = note;
  }
}

saveNoteBtn.addEventListener('click', () => {
  const note = noteInput.value.trim();
  if (note) {
    localStorage.setItem(NOTE_KEY, note);
    noteText.textContent = note;
    alert('Note sauvegardée !');
  }
});

deleteNoteBtn.addEventListener('click', () => {
  localStorage.removeItem(NOTE_KEY);
 // localStorage.clear() tous supprimer
  noteInput.value = '';
  noteText.textContent = 'Aucune note enregistrée.';
  alert('Note supprimée.');
});

// Gestion objet avec JSON
function chargerObjet() {
  const data = localStorage.getItem(OBJECT_KEY);
  if (data) {
    const obj = JSON.parse(data);
    objectDisplay.innerHTML = `Nom : <strong>${obj.nom}</strong><br>Message : <em>${obj.message}</em>`;
    userName.value = obj.nom;
    userMessage.value = obj.message;
  }
}

saveObjectBtn.addEventListener('click', () => {
  const nom = userName.value.trim();
  const message = userMessage.value.trim();

  if (nom && message) {
    const obj = {
      nom: nom,
      message: message
    };
    localStorage.setItem(OBJECT_KEY, JSON.stringify(obj));
    chargerObjet();
    alert('Objet sauvegardé !');
  } else {
    alert('Merci de remplir les deux champs.');
  }
});

deleteObjectBtn.addEventListener('click', () => {
  localStorage.removeItem(OBJECT_KEY);
  userName.value = '';
  userMessage.value = '';
  objectDisplay.textContent = 'Aucune donnée enregistrée.';
  alert('Objet supprimé.');
});

// Au chargement de la page
window.addEventListener('load', () => {
  chargerNote();
  chargerObjet();
});