import { DeleteTodoAction, FetchTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos = 0,
  deleteTodo = 1,
}

export type Action = FetchTodosAction | DeleteTodoAction;
