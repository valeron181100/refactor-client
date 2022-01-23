"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTodoItemResponse = exports.toTodoItem = void 0;
var toTodoItem = function (todoItemResp) { return (__assign(__assign({}, todoItemResp), { tags: todoItemResp.tags.join(" ") })); };
exports.toTodoItem = toTodoItem;
var toTodoItemResponse = function (todoItem) { return (__assign(__assign({}, todoItem), { tags: todoItem.tags.split(" ") })); };
exports.toTodoItemResponse = toTodoItemResponse;
//# sourceMappingURL=todos.helpers.js.map