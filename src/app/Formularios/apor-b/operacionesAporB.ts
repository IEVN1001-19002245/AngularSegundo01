export class operacionesAporB {
  a!: number;
  b!: number;

  concatenar(): string {
    let cadena = '';
    for (let i = 0; i < this.a; i++) {
      if (i != 0) {
        cadena += '+';
      }
      cadena += this.b.toString();
    }
    return cadena;
  }

  calcular(): string {
    let cadena = this.concatenar();
    let resultadoM = this.a * this.b;
    return cadena + ' = ' + resultadoM.toString();
  }
}
