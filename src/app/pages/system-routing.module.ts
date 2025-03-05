import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskMainComponent } from './home/childs/task-main/task-main.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
      {
        path: '', redirectTo: 'main', pathMatch:"full"
      },
      {
        path:'main', component: TaskMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SystemRoutingModule { }
