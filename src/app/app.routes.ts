import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { InfoComponent } from './info/info.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path:'inicio', component: PrincipalComponent},
    {path:'info', component: InfoComponent},
    {path:'proyectos', component:ProyectosComponent},
    {path:'nav', component:NavComponent}
];
