import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TaskActions } from "./actions";
import { fromTask, State } from "src/app/core/store/reducers";
import { Task } from "src/app/core/interfaces/task.interface";
@Injectable({
  providedIn: "root",
})
export class TaskFacadeService {
  constructor(private store: Store<State>) { }

  save(task: Task) {
    this.store.dispatch(TaskActions.saveTask({ task }));
  }
  getTask(): Observable<Task | null> {
    return this.store.select(fromTask.getTask);
  }
  selectTask(task: Task | null) {
    this.store.dispatch(TaskActions.selectTask({ task }));
  }
  setTaskList(taskList: Task[]) {
    this.store.dispatch(TaskActions.setTaskList({ taskList }));
  }
  getTaskList(): Observable<Task[]> {
    return this.store.select(fromTask.getTaskList);
  }

  getMessage(): Observable<string | null> {
    return this.store.select(fromTask.getMessage);
  }
  deleteTask(task: Task) {
    this.store.dispatch(TaskActions.deleteTask({ task }));
  }
  getAllTask() {
    this.store.dispatch(TaskActions.getAllTask());
  }
}
