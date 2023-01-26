import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { Promo } from '../../models/constants/promo.enum';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];
  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donuts = this.donutService.getAllDonuts();
  }

  public trackById(index: number, value: Donut) {
    return value.id;
  }
}
