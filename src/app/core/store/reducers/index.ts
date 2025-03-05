import {
  createSelector,
  createFeatureSelector,
  Action,
  ActionReducerMap,
} from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { TaskReducer, TaskState } from '../../../pages/home/childs/task-main/store/reducer'
export interface State {
  task: TaskState
}
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    task: TaskReducer.reducer

  }),
});
const getTaskState = createFeatureSelector<TaskState>('task');
const getTaskList = createSelector(getTaskState, TaskReducer.getTaskList);
const getTask = createSelector(getTaskState, TaskReducer.getTask);
const getTaskError = createSelector(getTaskState, TaskReducer.getError);
const getTaskMessage = createSelector(getTaskState, TaskReducer.getMessage);
const getTaskLoading = createSelector(getTaskState, TaskReducer.getLoading);
export const fromTask = {
  getTaskState,
  getTaskList,
  getTask,

  getState: getTaskState,
  getError: getTaskError,
  getLoading: getTaskLoading,
  getMessage: getTaskMessage,

};
