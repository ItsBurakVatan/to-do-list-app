// Sidebar Menu Toggle
const menuBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
});

const style = document.createElement('style');
style.innerHTML = `
    .sidebar.hide { display: none; }
`;
document.head.appendChild(style);
