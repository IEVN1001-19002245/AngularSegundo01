import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {operacionesAporB} from './operacionesAporB';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apor-b',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent {
  formulario!: FormGroup;
  resultado!:string;
  op = new operacionesAporB();
  constructor(){}
  ngOnInit(): void{
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl(''),
    });
  }
  calcular() {
    this.op.a = this.formulario.value.a;
    this.op.b = this.formulario.value.b;
    this.resultado = this.op.calcular();
    
}
}