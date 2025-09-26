const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date');
const todoList = document.getElementById('todo-list');

// Bootstrap gradient color classes
const colors = ['bg-primary', 'bg-success', 'bg-warning', 'bg-info', 'bg-danger', 'bg-secondary'];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (task && dueDate) {
        const col = document.createElement('div');
        col.classList.add('col-md-4');

        const card = document.createElement('div');
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        card.classList.add('card', 'shadow-sm', colorClass);

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${task}</h5>
                <p class="card-text">
                    <span class="badge bg-light text-dark">Due: ${dueDate}</span>
                </p>
                <button class="btn btn-outline-light btn-sm delete-btn">Delete</button>
            </div>
        `;

        col.appendChild(card);
        todoList.appendChild(col);

        // Delete task
        card.querySelector('.delete-btn').addEventListener('click', () => {
            col.remove();
        });

        // Reset input fields
        taskInput.value = '';
        dueDateInput.value = '';
    }
});
