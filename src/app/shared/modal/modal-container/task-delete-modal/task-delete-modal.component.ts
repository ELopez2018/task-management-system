import { Component, OnInit } from '@angular/core';
import { TaskFacadeService } from '../../../../pages/home/childs/task-main/store/task-facade.service';
import { Task } from 'src/app/core/interfaces/task.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalResponseEnums } from '../../modal-core/modal.enums';

@Component({
  selector: 'app-task-delete-modal',
  templateUrl: './task-delete-modal.component.html',
  styleUrls: ['./task-delete-modal.component.scss']
})
export class TaskDeleteModalComponent implements OnInit {
  public task!: Task | null;
  constructor(
    private taskFacadeService: TaskFacadeService,
    private ngbActiveModal: NgbActiveModal
  ) {
    this.taskFacadeService.getTask()
      .subscribe(data => {
        this.task = data
      })
  }

  ngOnInit(): void {
  }
  cancel() {
    this.ngbActiveModal.close(ModalResponseEnums.CANCELAR)
  }
  continue() {
    if(!this.task)return;
    this.taskFacadeService.deleteTask(this.task)
    this.ngbActiveModal.close(ModalResponseEnums.CONTINUAR)
  }
}
