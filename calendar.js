const calendar = document.getElementById('calendar');
const now = new Date();
const monthYear = now.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

calendar.innerHTML = `<h2>${monthYear}</h2>`;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let calendarGrid = document.createElement('div');
calendarGrid.className = 'calendar-grid';

days.forEach(day => {
    const dayCell = document.createElement('div');
    dayCell.textContent = day;
    calendarGrid.appendChild(dayCell);
});

const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
const totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
    calendarGrid.appendChild(document.createElement('div'));
}

for (let i = 1; i <= totalDays; i++) {
    const dayCell = document.createElement('div');
    dayCell.textContent = i;
    calendarGrid.appendChild(dayCell);
}

calendar.appendChild(calendarGrid);
