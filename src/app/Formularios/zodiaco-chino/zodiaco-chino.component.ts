import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperacionesZodiaco } from './operacionesZodiaco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco-chino',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './zodiaco-chino.component.html',
  styleUrl: './zodiaco-chino.component.css'
})
export class ZodiacoChinoComponent {
  formulario!: FormGroup;
  op = new OperacionesZodiaco();
  mostrarResultado = false;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidoPaterno: new FormControl(''),
      apellidoMaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      año: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  calcular() {
    this.op.nombre = this.formulario.value.nombre;
    this.op.apellidoPaterno = this.formulario.value.apellidoPaterno;
    this.op.apellidoMaterno = this.formulario.value.apellidoMaterno;
    this.op.dia = Number(this.formulario.value.dia);
    this.op.mes = Number(this.formulario.value.mes);
    this.op.año = Number(this.formulario.value.año);
    this.op.sexo = this.formulario.value.sexo;

    this.op.calcular();
    this.mostrarResultado = true;
  }
}

