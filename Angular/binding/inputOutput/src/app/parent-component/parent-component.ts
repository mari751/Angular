import { Component } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.html',
  imports: [ChildComponent, FormsModule]
})
export class ParentComponent {
  // Task 1
  parentMessage: string = "Hello from Parent";

  // Task 2
  question: string = "How are you?";
  reply: string = "";

  // Task 3
  name: string = "";
  greeting: string = "";
  
  onReply(message: string) {
    this.reply = message;
  }

  sendGreeting(message: string) {
    this.greeting = message;
  }
}
