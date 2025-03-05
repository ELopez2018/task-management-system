import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMainComponent } from './task-main.component';
import { ModalService } from 'src/app/shared/modal/modal-service/modal.service';
import { TaskFacadeService } from './store/task-facade.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

class ModalServiceStub {}
class TaskFacadeServiceStub {}
describe('TaskMainComponent', () => {
  let component: TaskMainComponent;
  let fixture: ComponentFixture<TaskMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskMainComponent ],
      imports:[ ],
      schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers:[
        {provide: ModalService, useClass: ModalServiceStub},
        {provide: TaskFacadeService, useClass: TaskFacadeServiceStub},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
