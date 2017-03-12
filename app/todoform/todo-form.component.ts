import {Component} from '@angular/core';
import {OurService} from '../shared/our-service';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    title: string = '';

    constructor(private OurService: OurService) {
    }

    onAdd() {
        this.OurService.createEvent(this.title);
    }

}