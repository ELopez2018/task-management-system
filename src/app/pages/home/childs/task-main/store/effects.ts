import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, catchError, switchMap } from "rxjs/operators";
import { TaskActions } from "./actions";
import { of } from "rxjs";
import { ApiTaskService } from '../services/api-task.service';


@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private apiTaskService: ApiTaskService
  ) { }

  saveEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.saveTask),
      switchMap(({ task }) =>
        this.apiTaskService.saveTask(task)
          .pipe(
            map(taskList => {
              return TaskActions.saveTaskSuccess({ taskList });
            }),
            catchError(error => of(TaskActions.error({ error })))
          )
      )
    )
  );

deleteEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TaskActions.deleteTask),
    switchMap(({ task }) =>
      this.apiTaskService.deleteTask(task)
        .pipe(
          map(taskList => {
            return TaskActions.deleteTaskSuccess({ taskList });
          }),
          catchError(error => of(TaskActions.error({ error })))
        )
    )
  )
);

getAllEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TaskActions.getAllTask),
    switchMap(() =>
      this.apiTaskService.getAllTask()
        .pipe(
          map(taskList => {
            return TaskActions.getAllTaskSuccess({ taskList });
          }),
          catchError(error => of(TaskActions.error({ error })))
        )
    )
  )
)
}
