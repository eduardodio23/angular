import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-adicionar-usuario',
  imports: [FormsModule, Header],
  templateUrl: './adicionar-usuario.html',
  styleUrl: './adicionar-usuario.css',
})
export class AdicionarUsuario {
  nome = '';
  email = '';
  usuarios: Usuario[] = [];

  adicionarUsuario(): void {
    this.usuarios = [...this.usuarios, { nome: this.nome, email: this.email }];
    this.nome = '';
    this.email = '';
  }
}
