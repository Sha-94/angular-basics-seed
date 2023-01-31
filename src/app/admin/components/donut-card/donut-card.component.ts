import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  templateUrl: 'donut-card.component.html',
  styleUrls: ['./donut-card.component.scss'],
})
export class DonutCardComponent {
  @Input() donut!: Donut;
  @Output() onRemove = new EventEmitter<Donut>();

  public convertPenniesToDollars(amount: number): number{
    return amount / 100;
  }

  public removeDonut(): void {
    this.onRemove.emit(this.donut);
  }
}
