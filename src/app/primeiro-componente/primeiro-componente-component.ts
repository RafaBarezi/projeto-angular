// Para dizer ao angular que a classe é um componente usamos um decorador

import { Component } from "@angular/core";
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [SegundoComponenteComponent],
  template: `
    <h2>Primeiro componente</h2>
    <app-segundo-componente></app-segundo-componente>
  `,
  styles: [`h2 { color: red; }`]
})

// Componentes são classes. Criando componentes: 

export class PrimeiroComponenteComponent{}

// Depois eu vou em app.component.ts e associo o componente á aplicação

// Também tem que ir no app.routes e configurar.

// Depois de configurar o primeiro componente // ir no terminal e digite: ng generate component segundo-componente

// isso vai criar novos arquivos automaticamente