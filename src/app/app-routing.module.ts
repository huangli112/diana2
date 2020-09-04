import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guard/login.guard';


const routes: Routes = [
  {
    path: 'entrance', loadChildren: () => import('./modules/entrance/entrance.module').then(m => m.EntranceModule),


  },
  {
    path: 'home', loadChildren: () => import ('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [ LoginGuard ]
  },
  {
   path: '**' , redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
