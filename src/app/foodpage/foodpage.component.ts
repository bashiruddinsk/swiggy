import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent implements OnInit {
    food!:Foods;
    
  constructor(private activatedRoute:ActivatedRoute, 
    private foodService: FoodService, private cartService:CartService,
  private router:Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
          this.food = foodService.getFoodById(params['id']);
      })
    }
    ngOnInit(): void {
      
    }


    getFullStars(star: number): number[] {
      return Array(Math.floor(star)).fill(0);
    }
  
    hasHalfStar(star: number): boolean {
      return star % 1 !== 0;
    }
  
    getEmptyStars(star: number): number[] {
      return Array(5 - Math.ceil(star)).fill(0);
    }

    addToCart(){
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart-page');
    }

}