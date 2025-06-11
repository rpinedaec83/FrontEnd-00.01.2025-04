console.log("Inicio de la aplicacion");

// let strObjJSON =`

// {
//   "nombre" : "Roberto",
//   "apellido" : "Pineda",
//   "edad" : 41,
//   "peso": 75.85
// }


// `;

// let objPersona = 
// {
//   nombre: "David",
//   apellido: "Lopez",
//   edad: 35,
//   peso: 69.90  
// };

// console.log(JSON.stringify(objPersona));

// console.log(JSON.parse(strObjJSON))

// let objPerseado = JSON.parse(strObjJSON);

// console.log(objPerseado.edad);


// localStorage.setItem("persona", "Roberto");

// $("#nombre").text(localStorage.getItem("persona"));

// localStorage.removeItem("persona");


//  sessionStorage.setItem("idCliente", 123456789)

// console.log(sessionStorage.getItem("idCliente"))

// localStorage.setItem("usuario", JSON.stringify(objPersona))


class Gundam {
  constructor(nombre, descripcion, imagen, escala, isCustom = false, custom = "") {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.escala = escala;
    this.isCustom = isCustom;
    this.custom = custom;
  }
}

let arrKits = []
const agregarNuevo = async (e) => {
  e.preventDefault();
  console.log("Hizo Clic en agregar");
  const { value: formValues } = await Swal.fire({
    title: "Ingresa los datos de Kit",
    icon: "info",
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",

    html: `
      <div class="form-group">
        <input type="text" id="nombre" placeholder="Escribe el Nombre" class="form-control input-md">
    </div>
    <div class="form-group">
        <textarea name="textarea" id="descripcion" rows="6" cols="50" class="form-control input-md"></textarea>
    </div>
    <div class="form-group">
        <input type="text" id="imagen" placeholder="Escribe el nombre de la imagen" class="form-control input-md">
    </div>
    <div class="form-group">
        <input type="text" id="escala" placeholder="Escribe la escala" class="form-control input-md">
    </div>
    <div class="form-group">
        <fieldset>
  <legend>Es Custom??:</legend>

  <div>
    <input type="checkbox"  id="isCustom" onchange="cambio(this)" name="scales" />
    <label for="scales">SI</label>
  </div>

 
</fieldset>
    </div>
    <div class="form-group" id="checkedCustom">
        <input type="text" id="custom" class="form-control input-md" placeholder="Describe el Custom">
    </div>
      `,
    preConfirm: () => {
      return {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        imagen: $("#imagen").val(),
        escala: $("#escala").val(),
        isCustom: $("#isCustom").val(),
        custom: $("#custom").val()
      }
    }
  });
  console.log(formValues);
  if (formValues) {
    let objGundam = new Gundam(formValues.nombre, formValues.descripcion, formValues.imagen, formValues.escala, formValues.isCustom, formValues.custom);
    console.log(objGundam);
    arrKits.push(objGundam)
    localStorage.setItem("kits", JSON.stringify(arrKits))
  }
}

$("#btnAgregar").on("click", agregarNuevo);


function cambio(checkbox) {
    if (checkbox.checked) {
      console.log("El checkbox está marcado (checked).");
      $("#checkedCustom").css('display', 'block');
    } else {
      $("#checkedCustom").css('display', 'none');
    }
  }