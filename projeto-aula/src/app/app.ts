import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { AdicionarUsuario } from './pages/adicionar-usuario/adicionar-usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, AdicionarUsuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-aula');
}
