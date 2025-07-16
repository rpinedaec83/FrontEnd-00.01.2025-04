console.log("Inicio de la aplicacion");

class Tarea {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

let arrKits = [];
const $table = $('#table');

$(document).ready(function () {
  if (localStorage.getItem("kits") === null) {
    arrKits = []
  } else {
    arrKits = JSON.parse(localStorage.getItem("kits"));
  }
    $table.bootstrapTable();
    $table.bootstrapTable('load', arrKits);
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
        <fieldset>
      `,
    preConfirm: () => {
      return {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
      }
    }
  });
  console.log(formValues);
  if (formValues) {
    let objTarea = new Tarea(formValues.nombre, formValues.descripcion);
    console.log(objTarea);
    arrKits.push(objTarea)
    $table.bootstrapTable('load', arrKits);
    localStorage.setItem("kits", JSON.stringify(arrKits))
  }
}

function borrarTodo() {
  arrKits = [];
  localStorage.removeItem("kits");
  $table.bootstrapTable('load', arrKits);
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


function accionFormatter(value, row, index) {
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
  'click .edit': function (e, value, row, index) {
    editarKit(row);

  },
  'click .remove': function (e, value, row, index) {
    borrarKit(row);
  }
}

function borrarKit(row) {
  let index = arrKits.indexOf(row);
  if (index > -1) {
    arrKits.splice(index, 1);
  }
  $table.bootstrapTable('load', arrKits);
  localStorage.setItem("kits", JSON.stringify(arrKits))
}

async function editarKit(row) {
  const index = arrKits.indexOf(row);
  let checked = arrKits[index].isCustom == 'on' ? 'checked' : "";
  let display = 'style="display: none;"';
  if (arrKits[index].isCustom == "on") {
    display = 'style="display: block;"';
  }
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
      `,
    preConfirm: () => {
      return {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
      }
    }
  });
  console.log(formValues);
  if (formValues) {
    arrKits[index].nombre = formValues.nombre;
    arrKits[index].descripcion = formValues.descripcion;
    $table.bootstrapTable('load', arrKits);
    localStorage.setItem("kits", JSON.stringify(arrKits))
  }
}

$table.on('click-row.bs.table', function (e, row, $element, field) {
  console.log('Fila clickeada:', row);
  console.log('Elemento:', $element);
  console.log('Campo:', field);
  $("#detalleKit").css('display', 'block');

  $.each(row, function (key, value) {
    switch (key) {
      case "nombre":
        $("#ddNombre").text(value);
        break;
      case "descripcion":
        $("#ddDescripcion").text(value);
        break;
      default:

        break;
    }
  })
});
