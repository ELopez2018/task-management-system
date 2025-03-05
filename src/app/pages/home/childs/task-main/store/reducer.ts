
import { Action, createReducer, on } from '@ngrx/store';
import { TaskActions } from './actions';
import { Task } from 'src/app/core/interfaces/task.interface';

interface TaskState {
  taskList: Task[];
  task: Task | null;
  error: string | null;
  loading: boolean;
  message: string | null;
}

const initialState: TaskState = {
  taskList: [],
  task: null,
  error: null,
  loading: false,
  message: null,
};

const taskReducer = createReducer(
  initialState,

  on(TaskActions.saveTask, (state) => {
    return { ...updateFlags(state) };
  }),
  on(TaskActions.saveTaskSuccess, (state, { taskList }) => {
    return { ...updateFlags(state), taskList };
  }),
  on(TaskActions.setTaskList, (state, { taskList }) => {
    return { ...updateFlags(state), taskList };
  }),
  on(TaskActions.selectTask, (state, { task }) => {
    return { ...updateFlags(state), task };
  }),
  on(TaskActions.deleteTaskSuccess, (state, { taskList }) => {
    return { ...updateFlags(state), taskList };
  }),
  on(TaskActions.getAllTaskSuccess, (state, { taskList }) => {
    return { ...updateFlags(state), taskList };
  }),


);
const updateFlags = (state: TaskState): TaskState => {
  return {
    ...state,
    error: null,
    loading: false,
    message: null,
  };
};

function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action);
}

const getTaskList = (state: TaskState) => state.taskList;
const getTask = (state: TaskState) => state.task;
const getLoading = (state: TaskState) => state.loading;
const getMessage = (state: TaskState) => state.message;
const getError = (state: TaskState) => state.error;
export const TaskReducer = {
  reducer,
  getTaskList,
  getTask,
  getLoading,
  getMessage,
  getError
}
export {
  TaskState
}
