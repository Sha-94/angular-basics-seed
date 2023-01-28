import { Injectable } from "@angular/core";
import { Promo } from '../models/constants/promo.enum';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts!: Donut[];
  constructor(){
    this.donuts =  [
      {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic',
      },
      {
        id: '3u90K1',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        promo: Promo.NEW,
        price: 129,
        description: 'Sticky Perfection',
      },
      {
        id: 'x0z0As',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 119,
        description: 'Caramel',
      },
      {
        id: 'g0r049',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 129,
        promo: Promo.LIMITED,
        description: 'For the sour advocate.',
      },
      {
        id: '8f5g2h',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 169,
        promo: Promo.LIMITED,
        description: 'Its a zest fest',
      },
    ];
  }

  public getDonutById(id: string): Donut {
    return this.donuts.find(donut => donut.id === id) || {name: '', icon: '', price: 0, description: ''};
  }

  public getAllDonuts(): Donut[]{
    console.log('Getting Donuts: ', this.donuts);
    return this.donuts;
  }

  public addDonut(newDonut: Donut): void{
    this.donuts = [...this.donuts, newDonut];
    console.log('Added New Donut: ', newDonut);
  }

  public updateDonut(newDonut: Donut): void {
    this.donuts = this.donuts.map(donut => {
      if(donut.id === newDonut.id){
        return newDonut;
      }
      return donut;
    });
  }


}