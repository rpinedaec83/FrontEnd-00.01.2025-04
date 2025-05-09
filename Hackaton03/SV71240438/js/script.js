document.getElementById("btb").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Click para ir a google");
  window.open("https://www.google.com", "_blank");
});

document.getElementById("boton").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Gracias por hacer click");
});
