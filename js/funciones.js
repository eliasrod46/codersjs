//Funciones

/* --------------Usuarios(Log&Reg)-------------- */

//Agrega un us nuevo(Check)
function agregarUsuario(us, arrayUs) {
  arrayUs.push(us);
  localStorage.setItem("usuarios", JSON.stringify(arrayUs));
  swal("Usuario Ceado!", "Por favor inicie Sesion!", "success");
}

//login(Check)
function logUsuario(email, pass, arrayUs) {
  arrayUs.forEach((usuario, indice) => {
    if (usuario.email == email) {
      if (usuario.password == pass) {
        localStorage.setItem("us_activo", JSON.stringify(usuario.id));
        window.location.href = "main.html";
      }
    }
  });
}

/* --------------Fin Usuarios(Log&Reg)-------------- */

//ordeno array periodos
function SortArray(x, y) {
  if (x.id > y.id) {
    return -1;
  }
  if (x.id < y.id) {
    return 1;
  }
  return 0;
}

//Muestra los periodos en main
function muestraPeriodos(periodos) {
  let resultado = "";
  let select = document.getElementById("option-periodos");

  periodos.forEach((periodo, indice) => {
    resultado += `<option value="${indice}">${periodo.nombre}</option>`;
  });
  if (select) {
    select.innerHTML = resultado;
  }
}

//recorre el arreglo y devuelve el total
function totalArreglo(array) {
  let respuesta = 0;

  for (let element of array) {
    val = element.valor;
    respuesta += val;
  }

  return respuesta;
}

//devuelve datos del areglo para agregar a tabla
function recorreArregloIngresos(array) {
  let resultado = "";

  arreglo = array;
  array.forEach((element) => {
    resultado += `
        <tr>
          <td>${element.descripcion}</td>
          <td>$${element.valor}</td>
          <td><button class="del_elemento" id="del-mov" palceholder="${element.id}" onclick="eliminar(${element.id})">Eliminar</button></td>
        </tr>
        `;
  });
  return resultado;
}


//devuelve datos del areglo para agregar a tabla
function recorreArregloForTable(array) {
  let resultado = "";

  arreglo = array;
  array.forEach((element) => {
    resultado += `
        <tr>
          <td>${element.descripcion}</td>
          <td>$${element.valor}</td>
          <td><button class="del_elemento" id="del-mov" palceholder="${element.id}" onclick="eliminar(${element.id})">Eliminar</button></td>
        </tr>
        `;
  });
  return resultado;
}


//Muestra el monto de diferencia entre ingresos y egresos
function muestraPresupuesto(ingresos, egresos) {
  let totalIngresos = 0;
  let totalEgresos = 0;
  let presupueso = 0;

  for (ingreso of ingresos) {
    totalIngresos += ingreso.valor;
  }

  for (egreso of egresos) {
    totalEgresos += egreso.valor;
  }

  presupueso = totalIngresos - totalEgresos;
  return presupueso;
}

//Carga la cabecera
function cargaCabecera(ingresos, egresos, nombre) {
  let periodo = document.getElementById("presupuesto-periodo");
  let presupuesto = document.getElementById("presupuesto-valor");
  let ingre = document.getElementById("ingresos-valor");
  let egre = document.getElementById("egresos-valor");
  periodo.innerHTML = nombre;
  presupuesto.innerHTML = muestraPresupuesto(ingresos, egresos);
  ingre.innerHTML = totalArreglo(ingresos);
  egre.innerHTML = totalArreglo(egresos);
}

//carga las tablas
function cargaTablas(ingresos, egresos) {
  //Capturo Tablas
  const tabla_egre = document.getElementById("tabla-mov-egresos");
  const tabla_ingre = document.getElementById("tabla-mov-ingresos");

  //varables para guardar los datso cargados por el us

  let ingreso = `
    <tr>
      <th>Detalle</th>
      <th>Monto</th>
      <td>Accion</td>
    </tr>
    `;
  let egreso = `
    <tr>
      <th>Detalle</th>
      <th>Monto</th>
      <td>Accion</td>
    </tr>
    `;
  egreso += recorreArregloForTable(egresos);
  tabla_egre.innerHTML = egreso;

  ingreso += recorreArregloForTable(ingresos);
  tabla_ingre.innerHTML = ingreso;
  
}
function eliminar(idb){
  let id = localStorage.getItem('us_activo');
  console.log(idb);
  console.log(usuarios[id]);
}
