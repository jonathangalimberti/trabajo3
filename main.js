//formulario modal//

const titulo = document.getElementById("titulo")
const tarea = document.getElementById("descripcion")

//funcion para extraer informacion//
let prueba = []
let index;

function extraerInfo() {
  prueba.push(new Tarea(id = prueba.length, titulo.value, tarea.value))

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

const imprimeTitulo = document.getElementById("card-tareas")

imprimirInfo()

function imprimirInfo() {
  if (prueba.length == 0) {

    imprimeTitulo.innerHTML = ` <div class="card-header">
         <h3 class="card-title" >Agregue una tarea</h3>
       </div>`
  } else {
    imprimeTitulo.innerHTML = ""
  }
  prueba.forEach((element) => {
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
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onclick="actualizarTarea(${element.id})"
                  ></button>
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
                  <button
                    type="button"
                    class="btn btn-success"
                   
                    data-bs-dimiss="modal " aria-label="Close">
                    Actualizar
                  </button>
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
  tituloEditar.value = prueba[arrayId].titulo
  tareaEditar.value = prueba[arrayId].tarea
}

function borrarTarea(id) {
  let index;

 for(i=0; i<prueba.length; i++) {
  if(id == prueba[i].id){
    index = i;
  }
 }

  prueba.splice(index, 1)

  imprimirInfo()
}

function actualizarTarea(id){
  const tituloEditar = document.getElementById("tituloEditar")
  const tareaEditar = document.getElementById("descripcionEditar")
  let arrayId = parseInt(id)

  prueba[arrayId].titulo = tituloEditar.value
  prueba[arrayId].tarea = tareaEditar.value

  imprimirInfo()
}