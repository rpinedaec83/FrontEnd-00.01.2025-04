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

let arrKits = [];
const $table = $('#table');

$( document ).ready(function() {
  if(localStorage.getItem("kits") === null){
    arrKits = []
  }else{
    arrKits = JSON.parse(localStorage.getItem("kits"))
    $table.bootstrapTable();
    $table.bootstrapTable('load', arrKits);
  }
});

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
    $table.bootstrapTable('load', arrKits);
    localStorage.setItem("kits", JSON.stringify(arrKits))
  }
}

function borrarTodo(){
  arrKits = [];
  localStorage.removeItem("kits");
}

$("#btnAgregar").on("click", agregarNuevo);
$("#btnBorrarTodo").on("click", borrarTodo);

function cambio(checkbox) {
    if (checkbox.checked) {
      console.log("El checkbox está marcado (checked).");
      $("#checkedCustom").css('display', 'block');
    } else {
      $("#checkedCustom").css('display', 'none');
    }
  }

function detailFormatter(index, row){
  console.log(row);
  let html = [];
  $.each(row, function(key, value){
    switch (key) {
      case "imagen":
          html.push(`<img src="img/${value}" width="300px"><br>`)
        break;
      case "isCustom":
        if(value==="on"){
          let arrCustom = row.custom.split(",")
          let htmlstr = "<b>Modificacion</b><ul>";
          arrCustom.forEach(element => {
            htmlstr+=`<li>${element}</li>`
          });
          htmlstr+="</ul>";
          html.push(htmlstr)
        }
        break;
      default:
        break;
    }
  })
  return html.join('');
}

function accionFormatter(value, row, index){
  return [
    '<a class="edit" href="javascript:void(0)" title="Edit">',
    '<i class="fas fa-edit"></i>',
    '</a>',
    '<a class="remove" href="javascript:void(0)" title="Remove">',
    '<i class="fas fa-trash"></i>',
    '</a>'
  ].join("");
}

window.accionEvents = {
  'click .edit':function(e,value,row,index){
editarKit(row);

  },
  'click .remove':function(e,value,row,index){
    console.log(row)
  }
}

async function editarKit(row){
  const index = arrKits.indexOf(row);
  const { value: formValues } = await Swal.fire({
    title: "Ingresa los datos para Editar del Kit",
    icon: "info",
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",

    html: `
      <div class="form-group">
        <input type="text" id="nombre" placeholder="Escribe el Nombre" class="form-control input-md" value="${row.nombre}">
    </div>
    <div class="form-group">
        <textarea name="textarea" id="descripcion" rows="6" cols="50" class="form-control input-md">${row.descripcion}</textarea>
    </div>
    <div class="form-group">
        <input type="text" id="imagen" placeholder="Escribe el nombre de la imagen" class="form-control input-md" value="${row.imagen}">
    </div>
    <div class="form-group">
        <input type="text" id="escala" placeholder="Escribe la escala" class="form-control input-md" value="${row.escala}">
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
        <input type="text" id="custom" class="form-control input-md" placeholder="Describe el Custom" value="${row.custom}">
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
    arrKits[index].nombre = formValues.nombre;
    arrKits[index].descripcion = formValues.descripcion;
    arrKits[index].imagen = formValues.imagen;
    arrKits[index].escala = formValues.escala;
    arrKits[index].isCustom = formValues.isCustom;
    arrKits[index].custom = formValues.custom;
    $table.bootstrapTable('load', arrKits);
    localStorage.setItem("kits", JSON.stringify(arrKits))
  }
}