export class operacionesDistancia {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;

  calcular(): number {
    return Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
  }
}
