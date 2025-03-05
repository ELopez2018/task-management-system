import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskState } from '../task-main/enums/task.enums';
import { TaskFacadeService } from '../task-main/store/task-facade.service';
import { Task } from 'src/app/core/interfaces/task.interface';
import { ModalService } from '../../../../shared/modal/modal-service/modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalResponseEnums } from 'src/app/shared/modal/modal-core/modal.enums';

@Component({
  selector: 'app-task-add-new-edit',
  templateUrl: './task-add-new-edit.component.html',
  styleUrls: ['./task-add-new-edit.component.scss']
})
export class TaskAddNewEditComponent implements OnInit {
  public formTask: FormGroup = new FormGroup({})
  public taskStates: TaskState[] = Object.values(TaskState);
  constructor(
    private fb: FormBuilder,
    private taskFacadeService: TaskFacadeService,
    private activeModal: NgbActiveModal
  ) {

  }
  getData() {
    this.taskFacadeService.getTask()
      .subscribe(data => {
        if (!data) {
          this.formTask = this.fb.group({
            title: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required]),
            status: new FormControl(TaskState.TO_DO, [Validators.required]),
          })
        }
        this.formTask = this.fb.group({
          title: new FormControl(data?.title, [Validators.required]),
          description: new FormControl(data?.description, [Validators.required]),
          status: new FormControl(data?.status, [Validators.required]),
        })
      })
  }
  ngOnInit(): void {
    this.getData()
  }

  save() {
    const task: Task = this.formTask.value
    console.log(task);
    this.taskFacadeService.save(task)
    this.activeModal.close(ModalResponseEnums.GUARDAR)
  }
  get disabledButton() {
    return this.formTask.invalid
  }
  cancel() {
    this.activeModal.close(ModalResponseEnums.CANCELAR)
  }
}
