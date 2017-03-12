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
var our_service_1 = require('../shared/our-service');
var ListComponent = (function () {
    function ListComponent(OurService) {
        this.OurService = OurService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.Events = this.OurService.getEvents();
    };
    ListComponent.prototype.delete = function (todo) {
        this.OurService.deleteEvent(todo);
    };
    ListComponent.prototype.toggle = function (todo) {
        this.OurService.toggleEvent(todo);
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-list',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css']
        }), 
        __metadata('design:paramtypes', [our_service_1.OurService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map