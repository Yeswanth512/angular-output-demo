import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `<h2>Child Component</h2>
  <button (click)="sendMessage()">Send Message to Parent</button>`,
  styleUrls: []
})
export class ChildComponent {

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit('Hello Parent! This is from the Child Component.');
  }
}
