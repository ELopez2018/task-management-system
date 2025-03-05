
import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/core/interfaces/task.interface';
enum TaskActionType {
  SaveTask = '[Task Component] Create Task',
  SaveTaskSucces = '[Task Component] Create Task Success',
  SetTaskList = '[Task Component] Set Task in Store   ',
  SelectTaskList = '[Task Component] select Task in Store   ',

  ActionFailure = '[Task API] Execute action failure',
  ActionSuccess = '[Task API] Execute action success',
  LoadSuccess = '[Task API] Load Success',
  Refresh = '[Task Page] Refresh',
  Selected = '[Task Page] Select',
  SubmitSuccess = '[Task API] Submit Success'
}

const saveTask = createAction(
  TaskActionType.SaveTask,
  props<{ task: Task }>()
);

const saveTaskSuccess = createAction(
  TaskActionType.SaveTaskSucces,
  props<{ task: Task }>()
)
const selectTask = createAction(
  TaskActionType.SetTaskList,
  props<{ task: Task }>()
);

const setTaskList = createAction(
  TaskActionType.SetTaskList,
  props<{ taskList: Task[] }>()
);

const error = createAction(
  TaskActionType.ActionFailure,
  props<{ error: any }>()
);

const refresh = createAction(
  TaskActionType.Refresh,
);
export const TaskActions = {
  saveTask,
  saveTaskSuccess,
  selectTask,
  setTaskList,
  error,
  refresh
}
