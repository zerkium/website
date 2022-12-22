const terminal = document.getElementById('terminal');
const closeButton = document.getElementById('close-button');
const commandInput = document.getElementById('command-input');
const experienceLink = document.getElementById('experience-link');

closeButton.addEventListener('click', () => {
  terminal.style.display = 'none';
});

experienceLink.addEventListener('click', (event) => {
  event.preventDefault();
  const terminal = document.createElement('div');
  terminal.id = 'terminal';
  terminal.innerHTML = `
    <div id="terminal-header">
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
