import {todos} from './data';
import {Todo} from './todo.class';

export class OurService {

    Events: Todo[] = todos;

    getEvents(): Todo[] {
        return this.Events;
    }

    createEvent(title: string) {
        let event = new Todo(title);
        this.Events.push(event);
    }

    deleteEvent(Event: Todo) {
        let index = this.Events.indexOf(Event);
        if (index > -1)
            this.Events.splice(index, 1);
    }

    toggleEvent(Event: Todo) {
        Event.compleated = !Event.compleated;
    }
}