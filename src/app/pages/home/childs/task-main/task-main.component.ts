import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/modal/modal-service/modal.service';

@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.scss']
})
export class TaskMainComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }
  addNew(){
    this.modalService.addNewTask()
  }
}
