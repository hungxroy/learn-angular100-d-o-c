import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  template: `
    <h2>Hello there!</h2>
    <input type="text" [value]="user.name">
    <button (click)="showInfo()">Show info!</button>
    <h3>Your name: {{  user.name }}</h3>
    <p>Your age: {{  user.age }}</p>
  `,
})

export class HelloComponent {

  constructor() { }

  user = {
    name: 'Nguyen Manh Hung',
    age: 25
  };

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() { }

  showInfo() {
    alert('Inside Angular Component method');
  }
}
