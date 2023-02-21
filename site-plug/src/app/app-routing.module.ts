import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
