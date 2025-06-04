class Software {
  constructor(public nombre: string) {}
}

class Categoria {
  constructor(public nombre: string) {}
}

class Laboratorio {
  public computadoras: Computadora[] = [];
  public softwareInstalado: Software[] = [];

  constructor(public nombre: string, public categoria: Categoria) {}

  agregarComputadora(computadora: Computadora) {
    this.computadoras.push(computadora);
  }

  agregarSoftware(software: Software) {
    this.softwareInstalado.push(software);
  }
}

class Computadora {
  constructor(public id: string, public laboratorio: Laboratorio) {
    laboratorio.agregarComputadora(this);
  }
}

class Estudiante {
  constructor(public nombre: string) {}
}

class Participacion {
  constructor(
    public estudiante: Estudiante,
    public categoria: Categoria,
    public laboratorio: Laboratorio,
    public computadora: Computadora,
    public softwareRequerido: Software[]
  ) {}

  mostrarDetalle(): void {
    console.log(` Participante: ${this.estudiante.nombre}`);
    console.log(` Categoría: ${this.categoria.nombre}`);
    console.log(` Laboratorio: ${this.laboratorio.nombre}`);
    console.log(` Computadora: ${this.computadora.id}`);
    console.log(` Software del laboratorio: ${this.laboratorio.softwareInstalado.map(s => s.nombre).join(', ')}`);
    console.log(` Software requerido: ${this.softwareRequerido.map(s => s.nombre).join(', ')}`);
    console.log('='.repeat(50));
  }
}
