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

let usuarios = [
  {
    nombre: "Coder House",
    email: "coder@house.com",
    password: "1234",
    movimientos: [
      {
        nombre: "Mayo - 22",
        ingresos: [
          { descripcion: "Sueldo", valor: 35000, id: 0 },
          { descripcion: "Ingreso 2", valor: 20000, id: 1 },
        ],
        egresos: [
          { descripcion: "Egreso 1", valor: 400, id: 0 },
          { descripcion: "Egreso 2", valor: 7580, id: 1 },
          { descripcion: "Egreso 3", valor: 20000, id: 2 },
          { descripcion: "Egreso 4", valor: 18000, id: 3 },
        ],
        id: 2,
      },
      {
        nombre: "Abril - 22",
        ingresos: [
          { descripcion: "Sueldo", valor: 45000, id: 0 },
          { descripcion: "Ingreso 2", valor: 10000, id: 1 },
        ],
        egresos: [
          { descripcion: "Egreso 1", valor: 25000, id: 0 },
          { descripcion: "Egreso 2", valor: 7500, id: 1 },
        ],
        id: 1,
      },
      {
        nombre: "Marzo - 22",
        ingresos: [
          { descripcion: "Sueldo", valor: 55000, id: 0 },
          { descripcion: "ingreso 2", valor: 15000, id: 1 },
        ],
        egresos: [
          { descripcion: "Egreso 1", valor: 2000, id: 0 },
          { descripcion: "Egreso 2", valor: 3500, id: 1 },
          { descripcion: "Egreso 3", valor: 10000, id: 2 },
        ],
        id: 0,
      },
    ],
    id: 0,
  },
];
