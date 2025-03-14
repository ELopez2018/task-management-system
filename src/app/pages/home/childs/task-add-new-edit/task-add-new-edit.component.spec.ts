import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddNewEditComponent } from './task-add-new-edit.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/shared/modal/modal-service/modal.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskFacadeService } from '../task-main/store/task-facade.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
class ModalServiceStub {

}

class TaskFacadeServiceStub {
  getTask (){
    return of({})
  }
  getData(){
    return of({})
  }
  save(){}
}
describe('TaskAddNewEditComponent', () => {
  let component: TaskAddNewEditComponent;
  let fixture: ComponentFixture<TaskAddNewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskAddNewEditComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [NgbActiveModal, FormBuilder,
        { provide: ModalService, useClass: ModalServiceStub },
        { provide: TaskFacadeService, useClass: TaskFacadeServiceStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
