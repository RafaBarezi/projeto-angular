import { Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente-component';  
import { SegundoComponenteComponent } from './primeiro-componente/segundo-componente/segundo-componente.component';

// Esta é a configuração do routes para importar 

export const routes: Routes = [
  { path: '', redirectTo: 'pagina', pathMatch: 'full' },
  { path: 'primeiro', component: PrimeiroComponenteComponent },
  { path: 'segundo', component: SegundoComponenteComponent }
];
