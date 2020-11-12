import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-angular';

  rowClass = ''

  red = 'background-color: rgb(255,000,000);'
  orange = 'background-color: rgb(255, 128, 0);'
  yellow = 'background-color: rgb(255,255,000);'
  green = 'background-color: rgb(000,255,000);'
  teal = 'background-color: rgb(000,255,255);'
  blue = 'background-color: rgb(000,000,255);'
  purple = 'background-color: rgb(128,000,128);'

  hideTable() {
    this.rowClass = 'collapse'
  }
}
