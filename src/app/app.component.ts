import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent],
  template: `<h1>Parent Component</h1>
             <p>Message from Child: {{ receivedMessage }}</p>
             <app-child (messageEvent)="receiveMessage($event)"></app-child>`,
  styleUrls: [],
})
export class AppComponent {
  title = 'angular-output-demo';
  receivedMessage: string = '';
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
