import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicador',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicador.component.html',
  styleUrl: './multiplicador.component.css'
})
export class MultiplicadorComponent {
  formulario!:FormGroup;
  resultado!:number;
 
  constructor(){}
 
  ngOnInit(): void{
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      x2: new FormControl(''),
      y1: new FormControl(''),
      y2: new FormControl(''),
    });
  }
 
  multNumeros():void{
    let n1 = this.formulario.value.numero1;
    let n2 = this.formulario.value.numero2;
    this.resultado = n1 * n2;
  }
}