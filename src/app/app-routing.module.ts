import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SystemGuard } from './pages/guard/system.guard';

const routes: Routes = [
  {
    path: '', redirectTo:'login', pathMatch: 'full'
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'system',
    loadChildren: () =>
      import('./pages/system.module').then((m) => m.SystemModule),
    canActivate: [SystemGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
