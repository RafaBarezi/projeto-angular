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
  nome = "Meu nome é Cliente";
  dataNascimento = new Date(1990, 9, 15) ;
// criamos o endereço e fazemos a property binding no html 
  urlImagem = "/assets/image.jpeg";

mostrarDataNascimento(){
  alert(`A data de nascimento do cliente é: ${this.dataNascimento}`);
}  
}
