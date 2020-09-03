import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'entrance', loadChildren: () => import('./modules/entrance/entrance.module').then(m => m.EntranceModule)
},
  {
    path: 'home', loadChildren: () => import ('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
   path: '**' , redirectTo: 'entrance'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
