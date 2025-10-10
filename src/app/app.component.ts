import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './Formularios/distancia/distancia.component';
import { MultiplicadorComponent } from './Formularios/multiplicador/multiplicador.component';
import { AporBComponent } from './Formularios/apor-b/apor-b.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, MultiplicadorComponent, AporBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';
}