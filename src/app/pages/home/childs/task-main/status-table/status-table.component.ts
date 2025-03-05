import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../../../../core/interfaces/task.interface'
import { Subscription } from 'rxjs';
import { TaskFacadeService } from '../store/task-facade.service';
import { TaskState } from '../enums/task.enums';
@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit, OnDestroy {
  public taskList: Task[] = [
    {
      title: 'TAREA 1',
      status: TaskState.TO_DO,
      descripcion: 'TAREA 1'
    },
    {
      title: 'TAREA 2',
      status: TaskState.IN_PROGRESS,
      descripcion: 'TAREA 1'
    },
    {
      title: 'TAREA 3',
      status: TaskState.COMPLETE,
      descripcion: 'TAREA 1'
    }
  ]
  private subs: Subscription = new Subscription()
  constructor(private taskFacadeService: TaskFacadeService) {
   // this.getData();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  ngOnInit(): void {
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
            this.taskList = data ?? []
          }
        )
    )
  }
}
