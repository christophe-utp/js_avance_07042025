const apiUrl = 'http://localhost:3000/todos';

document.getElementById('addTodo').addEventListener('click', async () => {
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (title && content) {
        await fetch(apiUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title, content })
        });
        loadTodos();
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('Veuillez remplir les deux champs.');
    }
});

document.getElementById('searchTodo').addEventListener('click', async () => {
    const search = document.getElementById('search').value.trim();
    if (search) {
        const response = await fetch(`${apiUrl}/search/${search}`);
        const todos = await response.json();
        displayTodos(todos);
    }
});

document.getElementById('reloadTodos').addEventListener('click', () => {
    loadTodos();
});

async function loadTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    displayTodos(todos);
}

function displayTodos(todos) {
    const container = document.getElementById('todos');
    container.innerHTML = '';

    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.className = `todo ${todo.status ? 'done' : ''}`;

        todoDiv.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.content}</p>
            <p class="status-text" style="color:${todo.done ? 'green' : 'gray'}">
                Statut : ${todo.status ? 'Terminé' : 'En cours'}
            </p>
            <div class="todo-actions">
                <button onclick="viewTodo('${todo.id}')">Voir</button>
                <button onclick="toggleStatus('${todo.id}')">
                    ${todo.status ? 'Annuler' : 'Terminer'}
                </button>
                <button onclick="deleteTodo('${todo.id}')">Supprimer</button>
            </div>
        `;

        container.appendChild(todoDiv);
    });
}


async function deleteTodo(id) {
    if (confirm('Supprimer ce todo ?')) {
        await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
        loadTodos();
    }
}

async function toggleStatus(id) {
    const response = await fetch(`${apiUrl}/${id}`, { method: 'PATCH' });
    const result = await response.json();

    if (result.message === "statut modifié") {
        loadTodos();
    } else {
        alert("Erreur lors de la modification du statut.");
    }
}


function viewTodo(id) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(todo => {
            document.getElementById('modal-title').textContent = `Titre : ${todo.title}`;
            document.getElementById('modal-content').textContent = `Contenu : ${todo.content}`;

            document.getElementById('modal').classList.add('active'); // <-- utiliser 'active'
        });
}

function closeModal() {
    document.getElementById('modal').classList.remove('active'); // <-- utiliser 'active'
}


// Charger tous les todos au départ
loadTodos();
