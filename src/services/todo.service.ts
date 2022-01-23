import { from, map, tap } from "rxjs";
import { TodosHelpers } from "../app/helpers";
import { httpClient } from "../app/http.client"
import { TodoItem } from "../app/utils/TodoItem";
import { TodoItemResponse } from "../app/utils/TodoItemResponse";

export const getLastTodos = () => from(httpClient.get('/todos')).pipe(
    map(({data: todos}) => todos.map((todo: TodoItemResponse) => TodosHelpers.toTodoItem(todo)))
);

export const postTodo = (todoItem: TodoItem) => from(httpClient.post('/todos', TodosHelpers.toTodoItemResponse(todoItem)));

export const getTodosByTags = (tags: string) => from(httpClient.get('/todos/by_tag?tags=' + tags.split(' ').join('&tags='))).pipe(
    map(({data: todos}) => todos.map((todo: TodoItemResponse) => TodosHelpers.toTodoItem(todo)))
)