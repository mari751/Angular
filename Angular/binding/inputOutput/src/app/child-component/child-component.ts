import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.html',
})
export class ChildComponent {
  @Input() message?: string;

  @Input() question?: string;
  @Output() replyEvent = new EventEmitter<string>();

  @Input() name?: string;

  sendReply() {
    this.replyEvent.emit("im fine");
  }
}
