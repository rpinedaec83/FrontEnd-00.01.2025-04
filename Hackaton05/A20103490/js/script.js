document.getElementById("btnPop").addEventListener("click",(evt)=>{
    evt.preventDefault();
    Swal.fire({
        showCloseButton: true,
        icon: "success",
        text: "Su mensaje ha sido enviado",
        showConfirmButton: true,
        confirmButtonText: 'Continuar',
        customClass: {
          confirmButton: 'custom-button',
        },
      });
});