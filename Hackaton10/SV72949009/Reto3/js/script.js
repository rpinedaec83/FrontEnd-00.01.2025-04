
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const tableBody = document.querySelector("#contactsTable tbody");
    const searchInput = document.querySelector("#search");

    const showToast = (message, icon = 'success') => {
      const toastId = `toast-${Date.now()}`;
      const toast = document.createElement("div");
      toast.className = `toast align-items-center text-white bg-${icon === 'success' ? 'success' : 'danger'} border-0 show mb-2`;
      toast.id = toastId;
      toast.setAttribute("role", "alert");
      toast.innerHTML = `<div class="d-flex"><div class="toast-body">${message}</div></div>`;
      document.getElementById("toast-container").appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    };

    const saveContacts = () => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    };

    const renderContacts = (filter = "") => {
      const rows = contacts
        .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
        .map((c, i) => `
          <tr>
            <td>${c.name}</td>
            <td>${c.email}</td>
            <td>${c.phone}</td>
            <td>
              <button class="btn btn-sm btn-warning me-1" onclick="editContact(${i})">Editar</button>
              <button class="btn btn-sm btn-danger" onclick="deleteContact(${i})">Eliminar</button>
            </td>
          </tr>
        `).join("");
      tableBody.innerHTML = rows;
    };

    window.editContact = async (index) => {
      const contact = contacts[index];
      const { value: formValues } = await Swal.fire({
        title: "Editar Contacto",
        html: `
          <input id="swal-name" class="form-control mb-2" placeholder="Nombre" value="${contact.name}">
          <input id="swal-email" class="form-control mb-2" placeholder="Email" value="${contact.email}">
          <input id="swal-phone" class="form-control" placeholder="Teléfono" value="${contact.phone}">`,
        focusConfirm: false,
        preConfirm: () => {
          return {
            name: document.getElementById('swal-name').value,
            email: document.getElementById('swal-email').value,
            phone: document.getElementById('swal-phone').value
          };
        }
      });

      if (formValues && validateForm(formValues)) {
        contacts[index] = formValues;
        saveContacts();
        renderContacts(searchInput.value);
        showToast("Contacto actualizado");
      }
    };

    window.deleteContact = (index) => {
      contacts.splice(index, 1);
      saveContacts();
      renderContacts(searchInput.value);
      showToast("Contacto eliminado", "danger");
    };

    const validateForm = ({ name, email, phone }) => {
      if (!name || !email || !phone) {
        showToast("Todos los campos son obligatorios", "danger");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{9,12}$/;
      if (!emailRegex.test(email)) {
        showToast("Email no válido", "danger");
        return false;
      }
      if (!phoneRegex.test(phone)) {
        showToast("Teléfono no válido (9-12 dígitos)", "danger");
        return false;
      }
      return true;
    };

    document.getElementById("addBtn").addEventListener("click", async () => {
      const { value: formValues } = await Swal.fire({
        title: "Agregar Contacto",
        html: `
          <input id="swal-name" class="form-control mb-2" placeholder="Nombre">
          <input id="swal-email" class="form-control mb-2" placeholder="Email">
          <input id="swal-phone" class="form-control" placeholder="Teléfono">`,
        focusConfirm: false,
        preConfirm: () => {
          return {
            name: document.getElementById('swal-name').value,
            email: document.getElementById('swal-email').value,
            phone: document.getElementById('swal-phone').value
          };
        }
      });

      if (formValues && validateForm(formValues)) {
        contacts.push(formValues);
        saveContacts();
        renderContacts(searchInput.value);
        showToast("Contacto agregado");
      }
    });

    document.getElementById("sortName").addEventListener("click", () => {
      contacts.sort((a, b) => a.name.localeCompare(b.name));
      saveContacts();
      renderContacts(searchInput.value);
    });

    searchInput.addEventListener("input", e => {
      renderContacts(e.target.value);
    });

    renderContacts();
