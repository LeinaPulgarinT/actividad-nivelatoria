class secuenciaPrincipal {
  constructor(temperatura, luminsidad, color, masa, radio) {
    this.temperatura = temperatura;
    this.luminsidad = luminsidad;
    this.color = color;
    this.masa = masa;
    this.radio = radio;
    this.example = false;
  }

  modificarAtributos(atributos) {
    let { color, luminsidad, masa, radio } = atributos;

    this.color = color || this.color;
    this.luminsidad = luminsidad || this.luminsidad;
    this.masa = masa || this.masa;
    this.radio = radio || this.radio;
  }
}

class grupolocal extends secuenciaPrincipal {
  constructor(temperatura, luminosidad, masa, radio, nombre) {
    super(temperatura, luminosidad, masa, radio);
    this.nombre = nombre;
  }

  modificarNombre(Nombre) {
    this.nombre = Nombre || this.nombre;
  }
}

let enanaBlanca = new secuenciaPrincipal(100000, 80, "blanco", 5000000, 400000);
console.log(enanaBlanca);
enanaBlanca.modificarAtributos({ color: "rojo", luminsidad: 200000 });
console.log(enanaBlanca);

let supernova = new secuenciaPrincipal(
  3000000,
  80,
  "azul-violeta",
  80000000,
  500000
);
console.log(supernova);

let betelgues = new grupolocal(
  70000,
  60,
  "anaranjada",
  600000,
  800000,
  "betelgues"
);

betelgues.modificarNombre("vega");
console.log(betelgues);
