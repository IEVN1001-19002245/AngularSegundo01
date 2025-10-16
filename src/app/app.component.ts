import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { DistanciaComponent } from './Formularios/distancia/distancia.component';
import { MultiplicadorComponent } from './Formularios/multiplicador/multiplicador.component';
import { AporBComponent } from './Formularios/apor-b/apor-b.component';
import { ZodiacoChinoComponent } from './Formularios/zodiaco-chino/zodiaco-chino.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, MultiplicadorComponent, AporBComponent, NavbarComponent, ZodiacoChinoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularSegundo01';

  ngOnInit(): void {
    initFlowbite();
  }
}