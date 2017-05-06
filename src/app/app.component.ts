import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  dropDownData: Array<any> = [{
    text: 'Option one'
  },
  {
    id: 1,
    text: 'Option two',
    userOptions: ['x', 'y', 'z']
  },
  {
    text: 'Option three'
  }];

  buttonWasClicked() {
    console.log("The button was clicked!");
  }

  itemWasClicked(event) {
    console.log(event);
  }
}
