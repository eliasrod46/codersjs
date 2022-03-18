/*----------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------Verifico si existe bbdd de us------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
localStorage.getItem("usuarios")
  ? (usuarios = JSON.parse(localStorage.getItem("usuarios")))
  : localStorage.setItem("usuarios", JSON.stringify(usuarios));

/*----------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------Logueo&Reg---------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------*/
let registro = document.getElementById("idForm-registro");
let ingreso = document.getElementById("idForm-ingreso");

if (registro && ingreso) {
  registro.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = document.getElementById("idUser-reg").value;
    let email = document.getElementById("idEmail-reg").value;
    let pass = document.getElementById("idPassword-reg").value;
    nuevoUsuario = new Usuario(user, email, pass, usuarios.length);
    agregarUsuario(nuevoUsuario, usuarios);

    registro.reset();
  });
  ingreso.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("idEmail-ing").value;
    let pass = document.getElementById("idPassword-ing").value;
    logUsuario(email, pass, usuarios);
  });
}

/*----------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Usuario Logueado------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------*/
if (localStorage.getItem("us_activo")) {
  //->guardo guardo datos del usuario y del ultimo periodo
  let id = localStorage.getItem("us_activo");
  let periodo = 0;
  localStorage.setItem("periodo_activo", periodo);
  let tituloUsuario = document.getElementById("titulo-usuario");
  tituloUsuario.innerHTML = usuarios[id].nombre;

  //->Cargo la vista de la info actual en el documento
  if (
    window.location.href.includes("main.html") &&
    usuarios[id].movimientos[periodo]
  ) {
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

  //->Cerrar session
  let cerrar = document.getElementById("close");
  if (cerrar) {
    cerrar.addEventListener("click", () => {
      if (localStorage.getItem("us_activo")) {
        localStorage.removeItem("us_activo");
        window.location.href = "index.html";
      }
    });
  }

  /*----------------------------------------------------------------------------------------------------------------*/
  /*----------------------------------------------------Periodos----------------------------------------------------*/
  /*----------------------------------------------------------------------------------------------------------------*/

  //->Muestro los periodos(select)
  muestraPeriodos(usuarios[id].movimientos);

  //->Agregar periodos(form)
  let formPeriodo = document.getElementById("form-nuevo-periodo");
  if (formPeriodo) {
    formPeriodo.addEventListener("submit", (e) => {
      e.preventDefault();

      nombrePeriodo = document.getElementById("periodo").value;
      let mov = new Movimiento(nombrePeriodo, usuarios[id].movimientos.length); //creo objeto movimientosz
      usuarios[id].movimientos.push(mov); //lo agrego al array movimientos del usuario
      usuarios[id].movimientos.sort(SortArray);
      localStorage.setItem("usuarios", JSON.stringify(usuarios)); //lo guardo en el localstorage

      window.location.href = "main.html";
    });
  }

  //->obtengo el periodo seleccionado
  let selectPeriodo = document.getElementById("form-periodo");
  if (selectPeriodo) {
    selectPeriodo.addEventListener("submit", (e) => {
      e.preventDefault();
      periodoElegido = document.getElementById("option-periodos").value;
      periodo = periodoElegido;
      localStorage.setItem("periodo_activo", periodo);

      //->cargo la vista del periodo seleccionado en el documento
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

  /*-----------------------------------------------------------------------------------------------------------------*/
  /*---------------------------------------------------Movimientos---------------------------------------------------*/
  /*-----------------------------------------------------------------------------------------------------------------*/
  //->Agregar Movimientos
  let form = document.getElementById("form-info");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let op = document.getElementById("ingreso_egreso-opcion").value;
      let detalle = document.getElementById("detalle").value;
      let valor = parseFloat(document.getElementById("monto").value);

      if (op === "+") {
        let elemento = new Ingreso(
          detalle,
          valor,
          usuarios[id].movimientos[periodo].ingresos.length
        );
        usuarios[id].movimientos[periodo].ingresos.push(elemento);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      } else if (op === "-") {
        let elemento = new Egreso(
          detalle,
          valor,
          usuarios[id].movimientos[periodo].egresos.length
        );
        usuarios[id].movimientos[periodo].egresos.push(elemento);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      } else {
        console.log("Error en la carga");
      }

      //->Actualizo la vista despues de agregar un movimientos

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
    });
  }
}
