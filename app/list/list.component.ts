import {Component, OnInit} from '@angular/core';
import {Todo} from '../shared/todo.class';
import {OurService} from '../shared/our-service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class ListComponent implements OnInit {
    Events: Todo[];

    constructor(private OurService: OurService) {
    }

    ngOnInit() {
        this.Events = this.OurService.getEvents();
    }

    delete(todo: Todo) {
        this.OurService.deleteEvent(todo);
    }

    toggle(todo: Todo) {
        this.OurService.toggleEvent(todo);
    }
}