"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var utils_1 = require("./console/utils");
var services_1 = require("./services");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ask(question) {
    return new Promise(function (resolve, reject) {
        rl.question(question, function (input) { return resolve(input); });
    });
}
var askQuestion = function () {
    rl.question((0, utils_1.generateMenuWelcome)(), function (answer) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, todo, _b, _c, _d, _e, tags, byTagsData, byTagsCtr_1, ctr_1, data;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _a = answer;
                    switch (_a) {
                        case '1': return [3 /*break*/, 1];
                        case '2': return [3 /*break*/, 7];
                        case '3': return [3 /*break*/, 10];
                    }
                    return [3 /*break*/, 12];
                case 1:
                    console.log('\n Creating new task');
                    todo = {
                        name: '',
                        deadline: '',
                        description: '',
                        tags: ''
                    };
                    _b = todo;
                    return [4 /*yield*/, ask('Title: ')];
                case 2:
                    _b.name = (_f.sent());
                    _c = todo;
                    return [4 /*yield*/, ask('Description: ')];
                case 3:
                    _c.description = (_f.sent());
                    _d = todo;
                    return [4 /*yield*/, ask('Deadline: ')];
                case 4:
                    _d.deadline = (_f.sent());
                    _e = todo;
                    return [4 /*yield*/, ask('Tags: ')];
                case 5:
                    _e.tags = (_f.sent());
                    return [4 /*yield*/, services_1.TodosService.postTodo(todo).toPromise()];
                case 6:
                    _f.sent();
                    console.log('Created successfuly');
                    askQuestion();
                    return [3 /*break*/, 13];
                case 7: return [4 /*yield*/, ask("Type tags: ")];
                case 8:
                    tags = _f.sent();
                    return [4 /*yield*/, services_1.TodosService.getTodosByTags(tags).toPromise()];
                case 9:
                    byTagsData = _f.sent();
                    byTagsCtr_1 = 1;
                    byTagsData.forEach(function (item) {
                        console.log(byTagsCtr_1 + '. Title: ' + item.name);
                        console.log('   Description: ' + item.description);
                        console.log('   Deadline: ' + item.deadline);
                        console.log('   Tags: ' + item.tags);
                        console.log();
                        byTagsCtr_1++;
                    });
                    byTagsCtr_1 = 1;
                    askQuestion();
                    return [3 /*break*/, 13];
                case 10:
                    console.log('Third task choosed');
                    ctr_1 = 1;
                    return [4 /*yield*/, services_1.TodosService.getLastTodos().toPromise()];
                case 11:
                    data = _f.sent();
                    data.forEach(function (item) {
                        console.log(ctr_1 + '. Title: ' + item.name);
                        console.log('   Description: ' + item.description);
                        console.log('   Deadline: ' + item.deadline);
                        console.log('   Tags: ' + item.tags);
                        console.log();
                        ctr_1++;
                    });
                    ctr_1 = 1;
                    askQuestion();
                    return [3 /*break*/, 13];
                case 12:
                    process.exit();
                    _f.label = 13;
                case 13: return [2 /*return*/];
            }
        });
    }); });
};
askQuestion();
//# sourceMappingURL=index.js.map