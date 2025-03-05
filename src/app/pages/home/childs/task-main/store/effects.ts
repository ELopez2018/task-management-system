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
            map(task => {
              return TaskActions.saveTaskSuccess({ task });
            }),
            catchError(error => of(TaskActions.error({ error })))
          )
      )
    )
  );

}
