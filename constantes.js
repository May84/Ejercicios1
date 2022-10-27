export const usuario = {
  nombre: "Mauricio",
  edad: 23,
  sexo: "Masculino",

  saludar: function () {
    console.log(
      `Hola me llamo ${this.nombre}, tengo ${this.edad} y soy del genero ${this.sexo} `
    );
  },
};

//1
export const miFuncion = function (saludo) {
  saludo = "Hola mundo";
  console.log(saludo);
  console.log(saludo.length);
};

//2
export const pemiFuncion = function (saludo2) {
  saludo2 = "Hola mundo";
  console.log(saludo2.substring(0, 4));
};

//3
export const miFuncion2 = function (saludo3) {
  (saludo3 = "Hola que tal"), "";
  console.log(saludo3.split(""));
};

//4
export const miFuncion3 = function (saludo4) {
  saludo4 = "Hola mundo";
  console.log(saludo4.repeat(3));
};
