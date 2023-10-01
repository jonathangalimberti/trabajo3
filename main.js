//formulario modal//

const titulo = document.getElementById("titulo")
const tarea = document.getElementById("descripcion")

//funcion para extraer informacion//
let prueba = []

function extraerInfo() {
    prueba.push(new Tarea(titulo.value, tarea.value))

    console.log(prueba)
    titulo.value = ""
    tarea.value = ""
    imprimirInfo()
}

class Tarea {
    constructor(titulo, tarea) {
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
            <button type="button" class="btn col-2 col-lg-1 mx-2">
              <img
                src="./img/kisspng-computer-icons-scalable-vector-graphics-apple-icon-edit-png-icon-blue-pencil-5ab065d43019b7.7432604215215098441971.png"
                alt=""
                class="img-fluid object-fit-cover p-md-3 p-lg-0"
              />
            </button>
            <button
              type="button"
              class="btn btn-danger fs-1 col-2 col-lg-1 w-auto py-0"
            >
              X
            </button>
          </div>`
    })
}