import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: Home },
    { path: 'cadastro', component: Usuarios },
    { path: 'usuarios', component: Usuarios },
    { path: '**', redirectTo: 'home' },
];
