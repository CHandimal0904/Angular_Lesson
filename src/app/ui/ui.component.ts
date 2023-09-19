import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UIComponent {
  CustomerName: string = "";
  CustomerCode: string = "";
  CustomerAmount: number = 0;
}
