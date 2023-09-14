import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name ="saman"
  addToCart: number = 0;
  product = {
  name: "Iphone 13",
  price: 800,
  color: "Black",
  discount_price: 8.9,
  stock: 3,
  pImage: '../../assets/img/iphonex.png'
  }

  onNameChange(event:any){
    // this.name = event.target.value;
  }
  decrementCartValue(){
    if (this.addToCart>0) {
      this.addToCart--;
    }
    
  }
  incrementCartValue(){
    if (this.addToCart< this.product.stock) {
      this.addToCart++;
    }
   
  }
}
