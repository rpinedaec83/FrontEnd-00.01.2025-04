(() => {
  'use strict';

  const form = document.querySelector('.needs-validation');
  const successMessage = document.getElementById('form-success');

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    form.classList.add('was-validated');

    // Mostrar mensaje con fade-in
    successMessage.classList.remove('d-none');
    successMessage.style.opacity = 0;

    setTimeout(() => {
      successMessage.style.transition = 'opacity 0.5s ease-in-out';
      successMessage.style.opacity = 1;
    }, 50);

    // Ocultar después de 4 segundos
    setTimeout(() => {
      form.reset();
      form.classList.remove('was-validated');
      successMessage.style.opacity = 0;

      setTimeout(() => {
        successMessage.classList.add('d-none');
      }, 500);
    }, 4000);
  });
})();