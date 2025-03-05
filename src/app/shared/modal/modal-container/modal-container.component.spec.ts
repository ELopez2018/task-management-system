/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { ModalContainerComponent } from './modal-container.component';
import { TaskFacadeService } from 'src/app/pages/home/childs/task-main/store/task-facade.service';
import { SharedModule } from '../../shared.module';
import { ModalService } from '../modal-service/modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
class ModalServiceStub {}
class TaskFacadeServiceStub {
  getTask (){
    return of({})
  }
  getData(){
    return of({})
  }
  save(){}
}
describe('ModalContainerComponent', () => {
  let component: ModalContainerComponent;
  let fixture: ComponentFixture<ModalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContainerComponent],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [NgbActiveModal,
        { provide: ModalService, useClas: ModalServiceStub },
        { provide: TaskFacadeService, useClas: TaskFacadeServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
