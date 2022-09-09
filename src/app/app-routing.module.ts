import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetaillisteComponent } from './detailliste/detailliste.component';
import { DetailtirageComponent } from './detailtirage/detailtirage.component';
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
    redirectTo:"acceuil",
    pathMatch:'full'
  },
  {
    path:"detailstirage",
    component:DetailtirageComponent
  },
  {
    path:"detailsliste",
    component:DetaillisteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
