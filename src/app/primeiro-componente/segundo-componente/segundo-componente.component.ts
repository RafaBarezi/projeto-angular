import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segundo-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl:"segundo-componente.component.html",
  styles: [`h3 { color: blue; }`]
})


export class SegundoComponenteComponent {

//permite inserir expressões dentro de strings no template HTML, exibindo o resultado dessas expressões como parte do texto
  nome = "Meu nome é User"
  dataNascimento = new Date(1990, 5, 15);

}
