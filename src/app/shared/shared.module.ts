import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModalContainerComponent } from "./modal/modal-container/modal-container.component";
import { TaskAddNewEditComponent } from "../pages/home/childs/task-add-new-edit/task-add-new-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskDeleteModalComponent } from "./modal/modal-container/task-delete-modal/task-delete-modal.component";

const MODULES = [
  CommonModule, // <-- Agregar CommonModule aquí
  RouterModule,
  ReactiveFormsModule
];

const COMPONENTS = [
  ModalContainerComponent,
  TaskAddNewEditComponent,
  TaskDeleteModalComponent
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...MODULES, ...COMPONENTS], // <-- También exportar COMPONENTS si son usados fuera de este módulo
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
