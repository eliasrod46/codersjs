/*------------------------------------------Clases------------------------------------------*/

class Usuario {
  constructor(nombre, email, password, id) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.movimientos = [];
    this.id = id;
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
  constructor(descripcion, valor, id) {
    this.descripcion = descripcion;
    this.valor = valor;
    this.id = id;
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
  constructor(descripcion, valor, id) {
    this.descripcion = descripcion;
    this.valor = valor;
    this.id = id;
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
  constructor(nombre, id) {
    this.nombre = nombre;
    this.ingresos = [];
    this.egresos = [];
    this.id = id;
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
let usuarios = [{"nombre":"admin","email":"admin@admin.com","password":"admin","movimientos":[{"nombre":"Marzo - 22","ingresos":[],"egresos":[{"descripcion":"agua","valor":2000,"id":2}],"id":0}],"id":0},{"nombre":"Coder House","email":"coder@house.com","password":"1234","movimientos":[{"nombre":"Mayo - 22","ingresos":[{"descripcion":"Sueldo","valor":5500,"id":0}],"egresos":[{"descripcion":"alquiler","valor":2000,"id":0},{"descripcion":"gasto 2","valor":500,"id":1}],"id":2},{"nombre":"Abril - 22","ingresos":[{"descripcion":"Sueldo","valor":5500,"id":0}],"egresos":[{"descripcion":"alquiler","valor":2000,"id":0}],"id":1},{"nombre":"Marzo - 22","ingresos":[{"descripcion":"Sueldo","valor":5500,"id":0}],"egresos":[{"descripcion":"alquiler","valor":2000,"id":0},{"descripcion":"gasto 2","valor":2000,"id":1}],"id":0}],"id":1}];


