import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {TodoFormComponent} from './todoform/todo-form.component';
import {ListComponent} from './list/list.component';
import {EventComponent} from './event/event.component';
import {OurService} from './shared/our-service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TodoFormComponent,
        ListComponent,
        EventComponent
    ],
    providers: [OurService],
    bootstrap: [AppComponent]
})

export class AppModule {
}