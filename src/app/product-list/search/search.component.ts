import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
search_text:string = 'mens wear';

updateSearchText(event:any){
  this.search_text = event.target.value;
}
}
