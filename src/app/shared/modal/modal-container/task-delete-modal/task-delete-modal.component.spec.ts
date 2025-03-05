import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeleteModalComponent } from './task-delete-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskFacadeService } from 'src/app/pages/home/childs/task-main/store/task-facade.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalService } from '../../modal-service/modal.service';
import { of } from 'rxjs';
class ModalServiceStub { }
class TaskFacadeServiceStub {
  getTask() {
    return of({})
  }
  getData() {
    return of({})
  }
  save() { }
}
describe('TaskDeleteModalComponent', () => {
  let component: TaskDeleteModalComponent;
  let fixture: ComponentFixture<TaskDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDeleteModalComponent],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [NgbActiveModal,
        { provide: ModalService, useClass: ModalServiceStub },
        { provide: TaskFacadeService, useClass: TaskFacadeServiceStub },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
