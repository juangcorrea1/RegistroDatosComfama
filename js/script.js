// creando popup
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});
btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

// dandole funcionalidad al formulario
const table = document.getElementById("gastos");
const form = document.getElementById("add-gasto");
const body = document.getElementById("table__body");

const addGasto = (idContador, cantidad, categoria, comentarios) => {
  const tr = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdCantidad = document.createElement("td");
  const tdCategoria = document.createElement("td");
  const tdComentarios = document.createElement("td");
  const tdBotones = document.createElement("td");

  tdCantidad.textContent = cantidad;
  tdCategoria.textContent = categoria;
  tdComentarios.textContent = comentarios;
  tdId.textContent = idContador;

  tr.appendChild(tdId);
  tr.appendChild(tdCantidad);
  tr.appendChild(tdCategoria);
  tr.appendChild(tdComentarios);
  tr.appendChild(tdBotones);

  tdBotones.innerHTML = `<button class="btnCircle" id="editar" onclick="editarGasto(${idContador})><abbr title="Editar"><i class="fa-solid fa-pen-to-square"></i></button>
<button class="btnCircle" id="eliminar" onclick="removeGasto(${idContador})"><abbr title="Eliminar"><i class="fa-solid fa-trash"></i></abbr></button>`;

  body.appendChild(tr);

  tr.setAttribute("id", idContador);

  tr.classList.add("table__row");
};

// dandole funcionalidad al boton guardar
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let cant = e.target.elements["cantidad"].value;
  let cat = e.target.elements["categoria"].value;
  let com = e.target.elements["comentarios"].value;
  let idContador = Date.now();
  addGasto(idContador, cant, cat, com);
  e.target.reset();
});

// dandole funcionalidad al boton eliminar
const removeGasto = (idContador) => {
  document.getElementById(idContador).remove();
};


