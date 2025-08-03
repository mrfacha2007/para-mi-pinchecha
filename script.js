const correctPassword = '1304';
let input = '';

function enterDigit(digit) {
  if (input.length < 4) {
    input += digit;
  }

  const display = document.getElementById('inputDisplay');
  display.textContent = input.padEnd(4, '•');

  if (input.length === 4) {
    if (input === correctPassword) {
      const passScreen = document.getElementById('passwordScreen');
      const noteScreen = document.getElementById('notepadScreen');

      passScreen.classList.remove('active');
      setTimeout(() => {
        noteScreen.classList.add('active');

        // Forzar animación reinicializando estilo
        const notepad = noteScreen.querySelector('.notepad');
        notepad.style.opacity = '0';
        notepad.style.transform = 'translateY(30px)';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            notepad.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            notepad.style.opacity = '1';
            notepad.style.transform = 'translateY(0)';
          });
        });
      }, 100);
    } else {
      alert('Contraseña incorrecta, intenta de nuevo');
      input = '';
      display.textContent = '••••';
    }
  }
}
