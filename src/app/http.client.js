"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
var axios_1 = require("axios");
exports.httpClient = axios_1.default.create({
    baseURL: "http://localhost:8080/api"
});
//# sourceMappingURL=http.client.js.map