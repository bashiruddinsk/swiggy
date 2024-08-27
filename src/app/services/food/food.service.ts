import { Injectable } from '@angular/core';
import { Foods } from '../../shared/model/food';
import { Tag } from '../../shared/model/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[] {
    return [
     {
      id:1,
      name: 'Cake',
      cookTime: '10-20',
      price:10,
      favorite:false,
      origins: ['indian'],
      star:4.0,
      imageUrl:'/assets/food-1.jpg',
      tags:['Cake'],
     },
     {
      id:2,
      name: 'Curry',
      cookTime: '20-30',
      price:15,
      favorite:true,
      origins: ['indian'],
      star:3.5,
      imageUrl:'/assets/food-2.jpg',
      tags:['Curry','Lunch'],
     },
     {
      id:3,
      name: 'Burger',
      cookTime: '10-20',
      price:40,
      favorite:true,
      origins: ['indian'],
      star:4.5,
      imageUrl:'/assets/food-3.jpg',
      tags:['Burger'],
     },
     {
      id:4,
      name: 'ChickenBurger',
      cookTime: '15-30',
      price:50,
      favorite:true,
      origins: ['indian'],
      star:4.0,
      imageUrl:'/assets/food-4.jpg',
      tags:['Burger'],
     },
     {
      id:5,
      name: 'Rice',
      cookTime: '20-40',
      price:20,
      favorite:false,
      origins: ['indian'],
      star:4.5,
      imageUrl:'/assets/food-5.jpg',
      tags:['Lunch'],
     },
     {
      id:6,
      name: 'french fries',
      cookTime: '20-40',
      price:20,
      favorite:false,
      origins: ['indian'],
      star:4.0,
      imageUrl:'/assets/food-6.jpg',
      tags:['french fries'],
     },
     {
      id:7,
      name: 'pizza',
      cookTime: '20-40',
      price:20,
      favorite:false,
      origins: ['indian'],
      star:4.0,
      imageUrl:'/assets/food-7.jpg',
      tags:['Pizza'],
     },

     {
      id:8,
      name: 'pasta',
      cookTime: '20-40',
      price:20,
      favorite:false,
      origins: ['indian'],
      star:4.0,
      imageUrl:'/assets/food-8.jpg',
      tags:['pasta'],
     },



     

    ];
  }


  getAllFoodByTag(tag:string):Foods[]{
    if(tag=='All')
      return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
     {name:'All',count:8},
     
     {name:'Pizza',count:1},
     {name:'Lunch',count:2},
     {name:'pasta',count:1},
     {name:'french fries',count:1},
     {name:'Burger',count:2},
     {name:'Cake',count:1}
    ];
  }


  getFoodById(id:number):Foods{
     return this.getAll().find(food =>food.id==id)!;


  }
}