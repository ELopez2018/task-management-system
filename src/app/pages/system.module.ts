import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SystemRoutingModule } from './system-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/components/nav-bar/nav-bar.component';
import { TaskMainComponent } from './home/childs/task-main/task-main.component';
import { StatusTableComponent } from './home/childs/task-main/status-table/status-table.component';
import { TaskAddNewEditComponent } from './home/childs/task-add-new-edit/task-add-new-edit.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    TaskMainComponent,
    StatusTableComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SystemRoutingModule
  ],
  exports: [

  ],
  providers: [],
})
export class SystemModule { }
