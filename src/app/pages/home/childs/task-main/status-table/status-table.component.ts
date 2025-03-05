import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../../core/interfaces/task.interface'
@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {
  public taskList: Task[] = [
    {
      title: 'TAREA 1',
      status: 'porHacer',
      descripcion: 'TAREA 1'
    },
    {
      title: 'TAREA 2',
      status: 'enProgreso',
      descripcion: 'TAREA 1'
    },
    {
      title: 'TAREA 3',
      status: 'completada',
      descripcion: 'TAREA 1'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  parceStatus(value: string) {
    switch (value) {
      case 'porHacer':
        return '1%';
      case 'enProgreso':
        return '50%';
      case 'completada':
        return '100%';

    }
    return '0%';
  }
}
