// este é o arquivo que mostra onde o app vai ser carregado 

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente-component";

// O arquivo usa do decorador que decora a classe AppComponent ( Classe controladora)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrimeiroComponenteComponent],
  template: `<app-primeiro-componente></app-primeiro-componente>`,
  styles: []
})

export class AppComponent {
  title = 'projeto-angular';
}

// Esta parte serve para associar o componente á aplicação

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
