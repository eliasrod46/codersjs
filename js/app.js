/*------------------------------------------Clases------------------------------------------*/

class Usuario {
  static contadorUsuario = 0;

  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.movimientos = [];
    this.id = ++Usuario.contadorUsuario;
  }

  //SETTERS
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setEmail(email) {
    this.email = email;
  }
  set setPassword(password) {
    this.password = password;
  }
  set setEmail(email) {
    this.email = email;
  }

  //GETTERS
  get getNombre() {
    return "this.nombre";
  }
}

class Ingreso {
  static contadorIngresos = 0;

  constructor(descripcion, valor) {
    this.descripcion = descripcion;
    this.valor = valor;
    this.id = ++Ingreso.contadorIngresos;
  }

  get getId() {
    return this.id;
  }

  get getDescripcion() {
    return this.descripcion;
  }

  get getValor() {
    return this.valor;
  }

  set setDescripcion(desc) {
    this.descripcion = desc;
  }

  set setValor(valor) {
    this.valor = valor;
  }
}

class Egreso {
  static contadorEgresos = 0;

  constructor(descripcion, valor) {
    this.descripcion = descripcion;
    this.valor = valor;
    this.id = ++Egreso.contadorEgresos;
  }

  get getId() {
    return this.id;
  }

  get getDescripcion() {
    return this.descripcion;
  }

  get getValor() {
    return this.valor;
  }

  set setDescripcion(desc) {
    this.descripcion = desc;
  }

  set setV0alor(valor) {
    this.valor = valor;
  }
}

class Movimiento {
  static contadorMovimiento = 0;

  constructor(nombre) {
    this.nombre = nombre;
    this.ingresos = [];
    this.egresos = [];
    this.id = ++Movimiento.contadorMovimiento;
  }
}

/*------------------------------------------varaibles y arrays------------------------------------------*/
// let usuarios = [
//   {
//     nombre: "admin",
//     email: "admin@admin.com",
//     password: "123",
//     movimientos: [
//       { nombre: "2", ingresos: [], egresos: [] },
//       { nombre: "1", ingresos: [], egresos: [] },
//       { nombre: "3", ingresos: [], egresos: [] },
//     ],
//   },
//   {
//     nombre: "admin",
//     email: "admin@admin.com",
//     password: "admin",
//     movimientos: [
//       {
//         nombre: "Junio - 22",
//         ingresos: [
//           { descripcion: "Sueldo", valor: 45000, id: 1 },
//           { descripcion: "Nafta", valor: 1500, id: 1 },
//           { descripcion: "Nafta", valor: 5000, id: 1 },
//         ],
//         egresos: [{ descripcion: "Nafta", valor: 10000, id: 1 }],
//       },
//       {
//         nombre: "Abril - 22",
//         ingresos: [
//           { descripcion: "Sueldo", valor: 35000, id: 1 },
//           { descripcion: "Nafta", valor: 3000, id: 1 },
//         ],
//         egresos: [{ descripcion: "Nafta", valor: 4750, id: 1 }],
//       },
//       {
//         nombre: "Marzo - 22",
//         ingresos: [{ descripcion: "Sueldo", valor: 50000, id: 1 }],
//         egresos: [{ descripcion: "Nafta", valor: 3250, id: 1 }],
//       },
//       {
//         nombre: "Mayo - 22",
//         ingresos: [{ descripcion: "Sueldo", valor: 40000, id: 1 }],
//         egresos: [{ descripcion: "Nafta", valor: 2000, id: 1 }],
//       },
//     ],
//   },
// ];
let usuarios = [];

/*------------------------------------------Verifico si existe bbdd de us------------------------------------------*/
localStorage.getItem("usuarios")
  ? (usuarios = JSON.parse(localStorage.getItem("usuarios")))
  : localStorage.setItem("usuarios", JSON.stringify(usuarios));

/* ------------------------------------------Logueo&Reg------------------------------------------ */

let registro = document.getElementById("idForm-registro");
let ingreso = document.getElementById("idForm-ingreso");

if (registro && ingreso) {
  registro.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = document.getElementById("idUser-reg").value;
    let email = document.getElementById("idEmail-reg").value;
    let pass = document.getElementById("idPassword-reg").value;
    nuevoUsuario = new Usuario(user, email, pass);
    agregarUsuario(nuevoUsuario, usuarios);
  });

  ingreso.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("idEmail-ing").value;
    let pass = document.getElementById("idPassword-ing").value;
    logUsuario(email, pass, usuarios);
  });
}

/*------------------------------------------Fin-Logueo----------------------------------------- */

/*----------------------------------------------------------------------------------- Logica*/

/*------------------------------------------check log y guardado de variables----------------------------------------- */
if (localStorage.getItem("us_activo")) {
  //------------------------------------------Almaceno la Id del us y el ultimo perido en local storage
  let id = localStorage.getItem("us_activo");
  let ultimoPeriodo = traerUltimoPeriodo();

  //---------------------------------------------------------------------cargo titulo con nombre de usuario
  let tituloUsuario = document.getElementById("titulo-usuario");
  if (tituloUsuario) {
    tituloUsuario.innerHTML = usuarios[id].nombre;
  }

  //---------------------------------------------------------------------muestro periodos
  muestraPeriodos(usuarios[id].movimientos);

  //---------------------------------------------------------------------agregar periodos

  let formPeriodo = document.getElementById("form-nuevo-periodo");
  if (formPeriodo) {
    formPeriodo.addEventListener("submit", (e) => {
      e.preventDefault();
      nombrePeriodo = document.getElementById("periodo").value;
      let mov = new Movimiento(nombrePeriodo); //creo objeto movimientosz
      mov = JSON.stringify(mov);
      alert(mov);
      usuarios[id].movimientos.push(mov); //lo agrego al array movimientos del usuario
      localStorage.setItem("usuarios", JSON.stringify(usuarios)); //lo guardo en el localstorage
      window.location.href = "main.html"; //vuelvo a main
    });
  }

  let periodo = usuarios[id].movimientos.length - 1;

  //obtengo el periodo actual
  let selectPeriodo = document.getElementById("form-periodo");
  if (selectPeriodo) {
    selectPeriodo.addEventListener("submit", (e) => {
      e.preventDefault();
      periodoElegido = document.getElementById("option-periodos").value;
      periodo = periodoElegido;
      cargaCabecera(
        usuarios[id].movimientos[periodo].ingresos,
        usuarios[id].movimientos[periodo].egresos,
        usuarios[id].movimientos[periodo].nombre
      );
      cargaTablas(
        usuarios[id].movimientos[periodo].ingresos,
        usuarios[id].movimientos[periodo].egresos
      );
    });
  }

  //actualizo la vista de la info en el documento
  if (window.location.href.includes("main.html")) {
    cargaCabecera(
      usuarios[id].movimientos[periodo].ingresos,
      usuarios[id].movimientos[periodo].egresos,
      usuarios[id].movimientos[periodo].nombre
    );
    cargaTablas(
      usuarios[id].movimientos[periodo].ingresos,
      usuarios[id].movimientos[periodo].egresos
    );
  }

  //Cargando tablas
  let form = document.getElementById("form-info");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let op = document.getElementById("ingreso_egreso-opcion").value;
      let detalle = document.getElementById("detalle").value;
      let valor = parseFloat(document.getElementById("monto").value);

      if (op === "+") {
        let elemento = new Ingreso(detalle, valor);
        usuarios[id].movimientos[periodo].ingresos.push(elemento);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      } else if (op === "-") {
        let elemento = new Egreso(detalle, valor);
        usuarios[id].movimientos[periodo].egresos.push(elemento);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      } else {
        console.log("Error en la carga");
      }

      //actualizo la vista de la info en el documento

      if (window.location.href.includes("main.html")) {
        cargaCabecera(
          usuarios[id].movimientos[periodo].ingresos,
          usuarios[id].movimientos[periodo].egresos,
          usuarios[id].movimientos[periodo].nombre
        );
        cargaTablas(
          usuarios[id].movimientos[periodo].ingresos,
          usuarios[id].movimientos[periodo].egresos
        );
      }

      swal(
        "Movimiento Agregado!",
        "persione OK para cerrar este mensaje!",
        "success"
      );
    });
  }

  //cerrar session
  let cerrar = document.getElementById("close");

  if (cerrar) {
    cerrar.addEventListener("click", () => {
      if (localStorage.getItem("us_activo")) {
        localStorage.removeItem("us_activo", -1);
        window.location.href = "index.html";
      }
    });
  }
}
