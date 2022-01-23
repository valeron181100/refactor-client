"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodosByTags = exports.postTodo = exports.getLastTodos = void 0;
var rxjs_1 = require("rxjs");
var helpers_1 = require("../app/helpers");
var http_client_1 = require("../app/http.client");
var getLastTodos = function () { return (0, rxjs_1.from)(http_client_1.httpClient.get('/todos')).pipe((0, rxjs_1.map)(function (_a) {
    var todos = _a.data;
    return todos.map(function (todo) { return helpers_1.TodosHelpers.toTodoItem(todo); });
})); };
exports.getLastTodos = getLastTodos;
var postTodo = function (todoItem) { return (0, rxjs_1.from)(http_client_1.httpClient.post('/todos', helpers_1.TodosHelpers.toTodoItemResponse(todoItem))); };
exports.postTodo = postTodo;
var getTodosByTags = function (tags) { return (0, rxjs_1.from)(http_client_1.httpClient.get('/todos/by_tag?tags=' + tags.split(' ').join('&tags='))).pipe((0, rxjs_1.map)(function (_a) {
    var todos = _a.data;
    return todos.map(function (todo) { return helpers_1.TodosHelpers.toTodoItem(todo); });
})); };
exports.getTodosByTags = getTodosByTags;
//# sourceMappingURL=todo.service.js.map