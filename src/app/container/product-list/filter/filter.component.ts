import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input()
All: number = 0;
@Input()
inStock:number = 0;
@Input()
outOfStock: number = 0;

@Output()
selectFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

selectFilterRadioButton: string = 'All';

onSelectFilterRadioButtonChanged(){
  this.selectFilterRadioButtonChanged.emit(this.selectFilterRadioButton);
}

}
