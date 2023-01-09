// Get a reference to the form and the encrypted message element
const form = document.getElementById('cipher-form');
const encryptedMessageEl = document.getElementById('encrypted-message');

// Define a function to encrypt the message
function encrypt(message, shift) {
  // Create a string of all the letters in the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Initialize an empty string to store the encrypted message
  let encryptedMessage = '';

  // Iterate over each character in the message
  for (let i = 0; i < message.length; i++) {
    // Get the current character and its position in the alphabet
    const char = message[i];
    const charIndex = alphabet.indexOf(char.toLowerCase());

    // If the character is not a letter, add it to the encrypted message as is
    if (charIndex === -1) {
      encryptedMessage += char;
      continue;
    }

    // Shift the character by the specified number of positions in the alphabet
    let encryptedChar = alphabet[(charIndex + shift) % 26];

    // If the original character was uppercase, make the encrypted character uppercase as well
    if (char === char.toUpperCase()) {
      encryptedChar = encryptedChar.toUpperCase();
    }

    // Add the encrypted character to the encrypted message
    encryptedMessage += encryptedChar;
  }

  return encryptedMessage;
}

// Add an event listener to the form that intercepts the form submission
form.addEventListener('submit', (e) => {
  // Prevent the form from refreshing the page
  e.preventDefault();

  // Get the message and shift value from the form
  const message = form.elements.message.value;
  const shift = form.elements.shift.value;

  // Encrypt the message
  const encryptedMessage = encrypt(message, shift);

  // Update the text of the encrypted message element
  encryptedMessageEl.textContent = encryptedMessage;
});
