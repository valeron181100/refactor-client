import { TodoItem } from "../utils/TodoItem";
import { TodoItemResponse } from "../utils/TodoItemResponse";

export const toTodoItem = (todoItemResp: TodoItemResponse): TodoItem => ({
    ...todoItemResp,
    tags: todoItemResp.tags.join(" ")
})

export const toTodoItemResponse = (todoItem: TodoItem): TodoItemResponse => ({
    ...todoItem,
    tags: todoItem.tags.split(" ")
})