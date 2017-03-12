"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_class_1 = require('../shared/todo.class');
var EventComponent = (function () {
    function EventComponent() {
        this.delete = new core_1.EventEmitter();
        this.toogle = new core_1.EventEmitter();
    }
    EventComponent.prototype.onToggle = function () {
        this.toogle.emit(this.event);
    };
    EventComponent.prototype.onDelete = function () {
        this.delete.emit(this.event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_class_1.Todo)
    ], EventComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EventComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EventComponent.prototype, "toogle", void 0);
    EventComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'event',
            templateUrl: 'event.component.html',
            styleUrls: ['event.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], EventComponent);
    return EventComponent;
}());
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map