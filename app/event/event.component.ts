import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../shared/todo.class';

@Component({
    moduleId: module.id,
    selector: 'event',
    templateUrl: 'event.component.html',
    styleUrls: ['event.component.css']
})

export class EventComponent {

    @Input() event: Todo;
    @Output() delete = new EventEmitter();
    @Output() toogle = new EventEmitter();

    onToggle() {
        this.toogle.emit(this.event);
    }

    onDelete() {
        this.delete.emit(this.event);
    }
}