import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { Promo } from '../../models/constants/promo.enum';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: [],
})
export class DonutListComponent implements OnInit {
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

  public trackById(index: number, value: Donut) {
    return value.id;
  }
}
