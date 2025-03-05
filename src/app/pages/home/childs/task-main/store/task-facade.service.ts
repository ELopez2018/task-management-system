import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TaskActions } from "./actions";
import { fromTask, State } from "src/app/core/store/reducers";

@Injectable({
  providedIn: "root",
})
export class TaskFacadeService {
  constructor(private store: Store<State>) { }

  create(task: Task) {
    this.store.dispatch(TaskActions.saveTask({ task }));
  }
  getTask(): Observable<Task | null> {
    return this.store.select(fromTask.getTask);
  }
  selectTask(task: Task) {
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

}
