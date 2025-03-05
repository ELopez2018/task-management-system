import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../../../../../core/interfaces/task.interface';
import { Apis } from 'src/app/core/constants/api-routes.constants.';

@Injectable({
  providedIn: 'root'
})
export class ApiTaskService {
  private server = environment.URL_API_SERVER
  private api = Apis.LOGIN
  constructor(private http: HttpClient,) { }

  saveTask(task: Task): Observable<Task> {
    const url = `${this.server}${Apis.LOGIN}/getBalance}`
    return this.http.post<Task>(url,task)
  }
}
