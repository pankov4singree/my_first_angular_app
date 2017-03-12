"use strict";
var Todo = (function () {
    function Todo(title, compleated) {
        if (compleated === void 0) { compleated = false; }
        this.title = title;
        this.compleated = compleated;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.class.js.map