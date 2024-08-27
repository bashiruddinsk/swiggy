import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   foods:Foods[]=[];

  constructor(private fs:FoodService,private router:ActivatedRoute){

  }
  ngOnInit(): void {

    this.router.params.subscribe(params =>{
      if(params['searchItem']){
        this.foods=this.fs.getAll().filter(food=> food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }
      else if(params['tag'])
        this.foods=this.fs.getAllFoodByTag(params['tag'])
      else{
        this.foods=this.fs.getAll();
      }
    })
    
     

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

}