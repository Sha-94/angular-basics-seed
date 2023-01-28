import { Injectable } from "@angular/core";
import { Promo } from '../models/constants/promo.enum';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts!: Donut[];
  constructor(){
    this.donuts = [];
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