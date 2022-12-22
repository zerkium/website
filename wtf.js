const terminal = document.getElementById('terminal');
const terminalHeader = document.getElementById('terminal-header');
const closeButton = document.getElementById('close-button');
const commandInput = document.getElementById('command-input');
const experienceLink = document.getElementById('experience-link');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

terminalHeader.addEventListener('mousedown', (event) => {
  initialX = event.clientX - xOffset;
  initialY = event.clientY - yOffset;

  if (event.target === terminalHeader) {
    isDragging = true;
  }
});

terminalHeader.addEventListener('mouseup', () => {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
});

terminalHeader.addEventListener('mousemove', (event) => {
  if (isDragging) {
    event.preventDefault();
    currentX = event.clientX - initialX;
    currentY = event.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, terminal);
  }
});

const setTranslate = (xPos, yPos, el) => {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

closeButton.addEventListener('click', () => {
  terminal.style.display = 'none';
});

experienceLink.addEventListener('click', (event) => {
  event.preventDefault();
  const terminal = document.createElement('div');
  terminal.id = 'terminal';
  terminal.innerHTML = `
    <div id="terminal-header" class="draggable">
      <span class="terminal-title">Experience Terminal</span>
      <button id="close-button">X</button>
    </div>
    <div id="terminal-body">
      <p>Welcome to the Experience Terminal!</p>
      <p>This terminal contains information about our experiences.</p>
    </div>
  `;
  document.body.appendChild(terminal);
});

commandInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const command = event.target.value;
    event.target.value = '';
    switch (command) {
      case 'help':
        terminalBody.innerHTML += '<p>List of available commands:</p>';
        terminalBody.innerHTML += '<ul>';
        terminalBody.innerHTML += '<li>help</li>';
        terminalBody.innerHTML += '<li>clear</li>';
        terminalBody.innerHTML += '</ul>';
        break;
      case 'clear':
        terminalBody.innerHTML = '';
        break;
      default:
        terminalBody.innerHTML += `<p>Error: unknown command '${command}'</p>`;
        break;
    }
  }
});
