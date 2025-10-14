import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { operacionesDistancia } from './operacionesDistancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
  op = new operacionesDistancia();

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl(''),
    });
  }

  calcular() {
    this.op.x1 = this.formulario.value.x1;
    this.op.y1 = this.formulario.value.y1;
    this.op.x2 = this.formulario.value.x2;
    this.op.y2 = this.formulario.value.y2;

    this.resultado = this.op.calcular();
  }
}

