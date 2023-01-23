import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styles: [],
})
export class DonutListComponent implements OnInit {
  donut!: Donut;
  donuts!: Donut[];
  constructor() {}

  ngOnInit(): void {
    this.donuts = [
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
        price: 129,
        description: 'stick-perfection',
      },
      {
        id: 'x0z0As',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 119,
        description: 'For the pure chocoholic',
      },
    ];

    this.donut = this.donuts[0];
  }
}
