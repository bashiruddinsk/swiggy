import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/model/cartItem';
//import { CartItem } from '../shared/model/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  cart!:Cart;

  constructor(private cartService:CartService){  }
    ngOnInit(): void {
      
      
    }

    setCart(){
      this.cart=this.cartService.getCart();
    }

    removeFromCart(cartItem:CartItem){
      this.cartService.removeFromCart(cartItem.food.id);
      this.setCart();
    }

    changeQuantity(cartItem:CartItem,quantityInString:string){
      const quantity=parseInt(quantityInString);
      this.cartService.changeQuantity(cartItem.food.id,quantity);
      this.setCart();
    }

}