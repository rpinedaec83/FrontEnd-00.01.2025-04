(() => {
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });
})();

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('bg-dark', 'shadow');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-dark', 'shadow');
  }
});
