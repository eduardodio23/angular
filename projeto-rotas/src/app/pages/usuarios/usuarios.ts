import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  imports: [FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios: Usuario[] = [];
  nome: string = '';
  email: string = '';

  adicionarUsuario(): void {
    this.usuarios = [...this.usuarios, { nome: this.nome, email: this.email }];
    this.nome = '';
    this.email = '';
  }
}
