import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/modal/modal-service/modal.service';
import { TaskFacadeService } from './store/task-facade.service';

@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.scss']
})
export class TaskMainComponent implements OnInit {

  constructor(
    private modalService:ModalService,
    private taskFacadeService:TaskFacadeService
  ) { }

  ngOnInit(): void {
  }
  addNew(){
    this.taskFacadeService.selectTask(null)
    this.modalService.addNewTask()
  }
}
