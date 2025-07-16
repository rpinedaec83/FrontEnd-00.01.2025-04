import { Tarea, getKits, agregarKit, borrarTodo, editarKit, borrarKit, buscarKit } from './taskManager.js';

const $table = $('#table');

$(document).ready(function () {
  $table.bootstrapTable();
  $table.bootstrapTable('load', getKits());
});

$("#btnAgregar").on("click", async (e) => {
  e.preventDefault();
  const { value: formValues } = await Swal.fire({
    title: "Ingresa los datos de Kit",
    icon: "info",
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
    html: `
      <input type="text" id="nombre" placeholder="Nombre" class="form-control input-md">
      <textarea id="descripcion" rows="4" class="form-control mt-2" placeholder="Descripción"></textarea>
    `,
    preConfirm: () => ({
      nombre: $("#nombre").val(),
      descripcion: $("#descripcion").val()
    })
  });

  if (formValues) {
    agregarKit(new Tarea(formValues.nombre, formValues.descripcion));
    $table.bootstrapTable('load', getKits());
  }
});

$("#btnBorrarTodo").on("click", () => {
  const vacio = borrarTodo();
  $table.bootstrapTable('load', vacio);
});

window.accionEvents = {
  'click .edit': async function (e, value, row, index) {
    const pos = buscarKit(row);
    const { value: formValues } = await Swal.fire({
      title: "Editar Kit",
      icon: "info",
      html: `
        <input type="text" id="nombre" class="form-control" value="${row.nombre}">
        <textarea id="descripcion" class="form-control mt-2">${row.descripcion}</textarea>
      `,
      preConfirm: () => ({
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val()
      })
    });

    if (formValues) {
      editarKit(pos, formValues.nombre, formValues.descripcion);
      $table.bootstrapTable('load', getKits());
    }
  },

  'click .remove': function (e, value, row, index) {
    const pos = buscarKit(row);
    borrarKit(pos);
    $table.bootstrapTable('load', getKits());
  }
};

function accionFormatter(value, row, index) {
  return [
    '<a class="edit" href="javascript:void(0)" title="Edit"><i class="fas fa-edit"></i></a>',
    '<a class="remove ms-2" href="javascript:void(0)" title="Remove"><i class="fas fa-trash"></i></a>'
  ].join('');
}

window.accionFormatter = accionFormatter;

$table.on('click-row.bs.table', function (e, row) {
  $("#detalleKit").css('display', 'block');
  $("#ddNombre").text(row.nombre);
  $("#ddDescripcion").text(row.descripcion);
});