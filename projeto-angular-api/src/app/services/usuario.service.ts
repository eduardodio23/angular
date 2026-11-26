import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:3001/usuarios'

  //GET - Listar todos os usuários
  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl)
  }

  //POST - Cadastrar um novo usuário
  cadastrar(usuario: Usuario): Observable<Usuario[]> {
    return this.http.post<Usuario[]>(this.apiUrl, usuario)
  }
}
