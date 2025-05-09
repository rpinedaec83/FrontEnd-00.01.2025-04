

document.getElementById("btnPop").addEventListener("click",(evt)=>{
    evt.preventDefault();
    Swal.fire({
        showCloseButton: true,
        icon: "success",
        text: "Te hemos enviado un correo",
        showConfirmButton: true,
        confirmButtonText: 'Continuar',
        customClass: {
          confirmButton: 'custom-button',
        },
      });
    // alert("Que feo")
});