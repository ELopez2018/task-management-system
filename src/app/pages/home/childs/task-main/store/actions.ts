
import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/core/interfaces/task.interface';
enum TaskActionType {
  SaveTask = '[Task Component] Save Task',
  SaveTaskSucces = '[Task Component] Save Task Success',
  SetTaskList = '[Task Component] Set Task in Store',
  DeleteTask = '[Task Component] Delete Task',
  DeleteTaskSuccess = '[Task Component] Delete Task response success',
  SelectTaskList = '[Task Component] select Task in Store',
  getAllTaskList = '[Task Component] get all Task from data base',
  getAllTaskListSuccess = '[Task Component] get all Task from data base success',

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
  props<{ taskList: Task[] }>()
)
const selectTask = createAction(
  TaskActionType.SetTaskList,
  props<{ task: Task | null }>()
);

const setTaskList = createAction(
  TaskActionType.SetTaskList,
  props<{ taskList: Task[] }>()
);

const deleteTask = createAction(
  TaskActionType.DeleteTask,
  props<{ task: Task }>()
);
const deleteTaskSuccess = createAction(
  TaskActionType.DeleteTaskSuccess,
  props<{ taskList: Task[] }>()
);
const error = createAction(
  TaskActionType.ActionFailure,
  props<{ error: any }>()
);
const getAllTask = createAction(
  TaskActionType.getAllTaskList
);

const getAllTaskSuccess = createAction(
  TaskActionType.getAllTaskListSuccess,
  props<{ taskList: Task[]}>()
);

const refresh = createAction(
  TaskActionType.Refresh,
);
export const TaskActions = {
  saveTask,
  saveTaskSuccess,
  selectTask,
  setTaskList,
  deleteTask,
  deleteTaskSuccess,
  getAllTask,
  getAllTaskSuccess,
  error,
  refresh
}
