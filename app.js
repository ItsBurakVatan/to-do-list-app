const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  if (title && description && dueDate && priority) {
    addTask(title, description, dueDate, priority);
    taskForm.reset();
  }
});

function addTask(title, description, dueDate, priority) {
  const taskCard = document.createElement('div');
  taskCard.className = `border-l-4 p-4 rounded-md shadow-md bg-gray-50 ${priorityColor(priority)}`;

  taskCard.innerHTML = `
    <div class="flex justify-between items-center">
      <h3 class="text-xl font-bold">${title}</h3>
      <span class="text-sm font-semibold px-2 py-1 rounded-full ${priorityBadge(priority)}">${priority}</span>
    </div>
    <p class="mt-2 text-gray-700">${description}</p>
    <p class="mt-2 text-gray-500 text-sm">Due: ${formatDate(dueDate)}</p>
    <button class="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onclick="removeTask(this)">Delete</button>
  `;

  taskList.appendChild(taskCard);
}

function removeTask(button) {
  button.parentElement.remove();
}

function priorityColor(priority) {
  switch (priority) {
    case 'High':
      return 'border-red-500';
    case 'Medium':
      return 'border-yellow-400';
    case 'Low':
      return 'border-green-400';
    default:
      return 'border-gray-300';
  }
}

function priorityBadge(priority) {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-700';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-700';
    case 'Low':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}
