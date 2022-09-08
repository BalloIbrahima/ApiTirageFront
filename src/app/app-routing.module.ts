import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
  {
    path:"acceuil",
    component:AcceuilComponent
  },
  {
    path:"tirage",
    component:TirageComponent
  },
  {
    path:'',
    redirectTo:"acceuil"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
