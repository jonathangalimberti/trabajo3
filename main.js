//formulario modal//

const titulo = document.getElementById("titulo")
const tarea = document.getElementById("descripcion")
const imprimeTitulo = document.getElementById("card-tareas")

//funcion para extraer informacion//
let listaDeTareas = [];
let index;
let jsonlistaDeTareas
// let jsonMemoria = localStorage.getItem('guardado')
// let memoriaLocal 
let guardado = JSON.parse( localStorage.getItem('guardado'))

function extraerInfo() {
  listaDeTareas.push(new Tarea(id = listaDeTareas.length, titulo.value, tarea.value))
  localStorage.setItem('guardado', JSON.stringify(listaDeTareas))

  titulo.value = ""
  tarea.value = ""
  imprimirInfo()
}

class Tarea {
  constructor(id, titulo, tarea) {
    this.id = id
    this.titulo = titulo
    this.tarea = tarea
  }
}

//secciones donde se imprime informacion//
function inicializarMemoria(){

  listaDeTareas = [...guardado]
}

inicializarMemoria()

imprimirInfo()

function imprimirInfo() {
  if (listaDeTareas.length == 0) {

    imprimeTitulo.innerHTML = ` <div class="card-header">
         <h3 class="card-title" >Agregue una tarea</h3>
       </div>`
  } else {
    imprimeTitulo.innerHTML = ""
  }
  listaDeTareas.forEach((element) => {
    imprimeTitulo.innerHTML += ` <div class="card-header">
            <h3 class="card-title" >${element.titulo}</h3>
          </div>
          <div
            class="card-body row align-items-center justify-content-md-center justify-content-evenly"
          >
            <p class="card-text col-8 col-lg-9">
            ${element.tarea}
            </p>
            <button type="button" class="btn col-2 col-lg-1 mx-2" data-bs-toggle="modal" data-bs-target="#modalEditar" onClick = "editarTarea(${element.id})"><img
            src="./img/kisspng-computer-icons-scalable-vector-graphics-apple-icon-edit-png-icon-blue-pencil-5ab065d43019b7.7432604215215098441971.png"
            alt=""
            class="img-fluid object-fit-cover p-md-3 p-lg-0" 
          />
            <button
              type="button"
              class="btn btn-danger fs-1 col-2 col-lg-1 w-auto py-0" onClick="borrarTarea(${element.id})"
            >
              X
            </button>
          </div>
          </section>

      <div
          class="modal fade"
          id="modalEditar"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <form action="">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="editar">
                    Edita tu tarea
                  </h1>
                  <button
                    type="button"
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onclick="actualizarTarea(${element.id})"
                  >Guardar</button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label
                      for="tituloEditar"
                      class="form-label"
                      id="titulo-modal"
                    >Título</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="tituloEditar"
                      placeholder="Nombre de la tarea"
                      aria-required="true"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="descripcionEditar" class="form-label"
                    >Descripción</label
                    >
                    <textarea
                      class="form-control"
                      id="descripcionEditar"
                      rows="7"
                      aria-required="true"
                    ></textarea>
                  </div>
                </div>
                <div class="modal-footer">

                </div>
              </div>
            </div>
          </form>
        </div> `
  })
}

function editarTarea(id) {

  const tituloEditar = document.getElementById("tituloEditar")
  const tareaEditar = document.getElementById("descripcionEditar")
  let arrayId = parseInt(id)
  tituloEditar.value = listaDeTareas[arrayId].titulo
  tareaEditar.value = listaDeTareas[arrayId].tarea
}

function borrarTarea(id) {
  let index;

 for(i=0; i<listaDeTareas.length; i++) {
  if(id == listaDeTareas[i].id){
    index = i;
  }
 }
  listaDeTareas.splice(index, 1)
  guardado.splice(index, 1)
  localStorage.setItem('guardado', JSON.stringify(listaDeTareas))
  imprimirInfo()
}

function actualizarTarea(id){
  const tituloEditar = document.getElementById("tituloEditar")
  const tareaEditar = document.getElementById("descripcionEditar")
  let arrayId = parseInt(id)

  listaDeTareas[arrayId].titulo = tituloEditar.value
  listaDeTareas[arrayId].tarea = tareaEditar.value
  localStorage.setItem('guardado', JSON.stringify(listaDeTareas))

  imprimirInfo()
}

