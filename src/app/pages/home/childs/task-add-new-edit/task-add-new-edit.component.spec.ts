import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddNewEditComponent } from './task-add-new-edit.component';

describe('TaskAddNewEditComponent', () => {
  let component: TaskAddNewEditComponent;
  let fixture: ComponentFixture<TaskAddNewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAddNewEditComponent ]
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
