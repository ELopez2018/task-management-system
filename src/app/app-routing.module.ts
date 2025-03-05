import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo:'system', pathMatch: 'full'
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'system',
    loadChildren: () =>
      import('./pages/system.module').then((m) => m.SystemModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
