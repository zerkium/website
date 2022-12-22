const terminal = document.getElementById('terminal');
const closeButton = document.getElementById('close-button');
const commandInput = document.getElementById('command-input');

closeButton.addEventListener('click', () => {
  terminal.style.display = 'none';
});

commandInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const command = event.target.value;
    event.target.value = '';
    // Add code to handle the command here
    switch (command) {
      case 'help':
        // Display a list of available commands
        break;
      case 'clear':
        // Clear the terminal screen
        break;
      default:
        // Display an error message
        break;
    }
  }
});
