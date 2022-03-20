/*-----------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Usuarios(Log&Reg)------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
//->Agrega Nuevo Usuario
function agregarUsuario(us, arrayUs) {
  arrayUs.push(us);
  localStorage.setItem("usuarios", JSON.stringify(arrayUs));
  swal("Usuario Creado!", "Por favor inicie Sesion!", "success");
}

//->Valida login de Usuario
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



/*----------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------Periodos----------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------*/
//->ordeno array periodos
function SortArray(x, y) {
  if (x.id > y.id) {
    return -1;
  }
  if (x.id < y.id) {
    return 1;
  }
  return 0;
}

//->Muestra los periodos en main
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



/*-----------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Cabecera y Tablas------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
//----->Carga la cabecera
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

//->Muestra el monto de diferencia entre ingresos y egresos
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

//->recorre el arreglo y devuelve el total
function totalArreglo(array) {
  let respuesta = 0;
  for (let element of array) {
    val = element.valor;
    respuesta += val;
  }
  return respuesta;
}

//----->carga las tablas
function cargaTablas(ingresos, egresos) {
  //Capturo Tablas
  const tabla_egre = document.getElementById("tabla-mov-egresos");
  const tabla_ingre = document.getElementById("tabla-mov-ingresos");

  //->varables para guardar los datso cargados por el us
  let ingreso = `
    
    <thead>
      <tr>
        <th>Detalle</th>
        <th>Monto</th>
        <th>Accion</th>
      </tr>
    </thead>
    `;
  let egreso = `
    <thead>
      <tr>
        <th>Detalle</th>
        <th>Monto</th>
        <th>Accion</th>
      </tr>
    </thead>
    `;
  egreso += recorreArregloTableEgresos(egresos);
  tabla_egre.innerHTML = egreso;

  ingreso += recorreArregloTableIngresos(ingresos);
  tabla_ingre.innerHTML = ingreso;
  
}

//->Devuelve datos del areglo para agregar a tabla(Egresos)
function recorreArregloTableEgresos(array) {
  let ban = -1; 
  let resultado = "";

  arreglo = array;
  array.forEach((element) => {
    resultado += `
        <tr>
          <td>${element.descripcion}</td>
          <td>$${element.valor}</td>
          <td><button class="del_elemento" onclick="eliminar(${ban}, ${element.id})">Eliminar</button></td>
        </tr>
        `;
  });
  return resultado;
}

//->Devuelve datos del areglo para agregar a tabla(Ingresos)
function recorreArregloTableIngresos(array) {
  let ban = 1; 
  let resultado = "";

  arreglo = array;
  array.forEach((element, indice) => {
    resultado += `
        <tr>
          <td>${element.descripcion}</td>
          <td>$${element.valor}</td>
          <td><button class="del_elemento" onclick="eliminar(${ban}, ${indice})">Eliminar</button></td>
        </tr>
        `;
  });
  return resultado;
}








function eliminar(ban ,idb){
  let us = localStorage.getItem('us_activo');
  let periodo =  localStorage.getItem("periodo_activo");
  if (ban == 1) {
    usuarios[us].movimientos[periodo].ingresos.splice(idb, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    cargaCabecera(
      usuarios[us].movimientos[periodo].ingresos,
      usuarios[us].movimientos[periodo].egresos,
      usuarios[us].movimientos[periodo].nombre
    );
    cargaTablas(
      usuarios[us].movimientos[periodo].ingresos,
      usuarios[us].movimientos[periodo].egresos
    );
    
  } else if(ban == -1) {
    usuarios[us].movimientos[periodo].egresos.splice(idb, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    cargaCabecera(
      usuarios[us].movimientos[periodo].ingresos,
      usuarios[us].movimientos[periodo].egresos,
      usuarios[us].movimientos[periodo].nombre
    );
    cargaTablas(
      usuarios[us].movimientos[periodo].ingresos,
      usuarios[us].movimientos[periodo].egresos
    );
    
  }
}


// cargaCabecera(
//   usuarios[us].movimientos[periodo].ingresos,
//   usuarios[us].movimientos[periodo].egresos,
//   usuarios[us].movimientos[periodo].nombre
// );
// cargaTablas(
//   usuarios[us].movimientos[periodo].ingresos,
//   usuarios[us].movimientos[periodo].egresos
// );