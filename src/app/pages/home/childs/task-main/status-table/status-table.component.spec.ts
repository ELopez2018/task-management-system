import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTableComponent } from './status-table.component';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/shared/modal/modal-service/modal.service';
import { TaskFacadeService } from '../store/task-facade.service';
import { Task } from 'src/app/core/interfaces/task.interface';
import { TaskState } from '../enums/task.enums';
class ModalServiceStub {
  addNewTask(){
    return new Promise((resolve) => resolve('Mock de tarea creada'));
  }
  deleteTask(){
    return new Promise((resolve) => resolve('Mock de tarea creada'));
  }
}
class TaskFacadeServiceStub {
  getTask() {
    return of({})
  }
  getData() {
    return of({})
  }
  save() { }
  getTaskList() {
    return of([])
  }
  getAllTask() {
    return of([])
  }
  selectTask(){}
}
describe('StatusTableComponent', () => {
  let component: StatusTableComponent;
  let fixture: ComponentFixture<StatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusTableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [NgbActiveModal, FormBuilder,
        { provide: ModalService, useClass: ModalServiceStub },
        { provide: TaskFacadeService, useClass: TaskFacadeServiceStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the task and launch the edit modal', () => {
    const itemMock: Task= {
      id:1,
      title: 'Item Mock',
      description: 'Item Mock',
      status: TaskState.TO_DO
    }
    const spy1 = spyOn(component['taskFacadeService'], "selectTask")
    const spy2 = spyOn(component['modalService'], "addNewTask")
    component.edit(itemMock)
    expect(spy1).toHaveBeenCalled()
    expect(spy2).toHaveBeenCalled()
  });
  it('should set the task and launch the delete modal', () => {
    const itemMock: Task= {
      id:1,
      title: 'Item Mock',
      description: 'Item Mock',
      status: TaskState.TO_DO
    }
    const spy1 = spyOn(component['taskFacadeService'], "selectTask")
    const spy2 = spyOn(component['modalService'], "deleteTask")
    component.delete(itemMock)
    expect(spy1).toHaveBeenCalled()
    expect(spy2).toHaveBeenCalled()
  });
});
