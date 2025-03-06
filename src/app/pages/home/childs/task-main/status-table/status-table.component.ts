import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../../../../core/interfaces/task.interface'
import { Subscription } from 'rxjs';
import { TaskFacadeService } from '../store/task-facade.service';
import { TaskState } from '../enums/task.enums';
import { ModalService } from '../../../../../shared/modal/modal-service/modal.service';
@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit, OnDestroy {
  public taskList: Task[] = []
  private subs: Subscription = new Subscription()
  constructor(
    private taskFacadeService: TaskFacadeService,
    private modalService: ModalService
  ) {
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  ngOnInit(): void {
    this.getData()
    this.taskFacadeService.getAllTask()
  }
  parceStatus(value: string) {
    switch (value) {
      case TaskState.TO_DO:
        return '1%';
      case TaskState.IN_PROGRESS:
        return '50%';
      case TaskState.COMPLETE:
        return '100%';

    }
    return '0%';
  }

  getData() {
    this.subs.add(
      this.taskFacadeService.getTaskList()
        .subscribe(
          data => {
            if(data){
              this.taskList = data
            }

          }
        )
    )
  }
  edit(item: Task) {
    this.taskFacadeService.selectTask(item)
    this.modalService.addNewTask()
  }
  delete(item: Task) {
    this.taskFacadeService.selectTask(item)
    this.modalService.deleteTask()
  }
}
