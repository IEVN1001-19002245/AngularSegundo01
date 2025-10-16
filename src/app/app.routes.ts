import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        children:[
            {
                path:'sing-in',
                loadComponent: () => import('./auth/features/sig-in/sig-in.component').then((c) => c.SigInComponent)
            },
            {
                path:'sing-up',
                loadComponent: () => import('./auth/features/sig-up/sig-up.component').then((c) => c.SigUpComponent)
            },
        ]
    },
    {
        path: 'utl',
        children:[
            {
                path: 'listaalumnos',
                loadComponent: () => import('./utl/alumnos/alumnos.component').then((c) => c.AlumnosComponent)
            },
            {
                path: 'agregar',
                loadComponent: () => import('./utl/agregar/agregar.component').then((c) => c.AgregarComponent)
            },
            {
                path: 'eliminar/:matricula',
                loadComponent: () => import('./utl/eliminar/eliminar.component').then((c) => c.EliminarComponent)
            },
            {
                path: 'editar/:matricula',
                loadComponent: () => import('./utl/editar/editar.component').then((c) => c.EditarComponent)
            },
        ]
    },
    {
        path: 'formulario',
        children:[
            {
                path:'apor-b',
                loadComponent: () => import('./Formularios/apor-b/apor-b.component').then((c) => c.AporBComponent)
            },
            {
                path:'distancia',
                loadComponent: () => import('./Formularios/distancia/distancia.component').then((c) => c.DistanciaComponent)
            },
            {
                path:'multiplicacion',
                loadComponent: () => import('./Formularios/multiplicador/multiplicador.component').then((c) => c.MultiplicadorComponent)
            },
            {
                path:'zodiaco-chino',
                loadComponent: () => import('./Formularios/zodiaco-chino/zodiaco-chino.component').then((c) => c.ZodiacoChinoComponent)
            },
        ]
    },
 
    {path: '', redirectTo: 'admin', pathMatch: 'full'},
    {path: '**', redirectTo: 'admin'},

];
