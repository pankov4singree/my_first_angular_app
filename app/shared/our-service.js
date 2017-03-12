"use strict";
var data_1 = require('./data');
var todo_class_1 = require('./todo.class');
var OurService = (function () {
    function OurService() {
        this.Events = data_1.todos;
    }
    OurService.prototype.getEvents = function () {
        return this.Events;
    };
    OurService.prototype.createEvent = function (title) {
        var event = new todo_class_1.Todo(title);
        this.Events.push(event);
    };
    OurService.prototype.deleteEvent = function (Event) {
        var index = this.Events.indexOf(Event);
        if (index > -1)
            this.Events.splice(index, 1);
    };
    OurService.prototype.toggleEvent = function (Event) {
        Event.compleated = !Event.compleated;
    };
    return OurService;
}());
exports.OurService = OurService;
//# sourceMappingURL=our-service.js.map