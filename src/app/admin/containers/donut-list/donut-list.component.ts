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
  public donuts!: Donut[];
  public isFormVisible!: boolean; 

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.initList();
  }

  public trackById(index: number, value: Donut) {
    return value.id;
  }

  public submit(donut:Donut){
       this.addDonut(donut);
       this.initList();
  }

  private initList(){
    this.getDonuts();
    this.isFormVisible = false;
  }

  private getDonuts(): void{
    this.donuts = this.donutService.getAllDonuts();
  }

  private addDonut(donut: Donut){
    this.donutService.addDonut(donut);
  }

  public onAdd(){
    this.isFormVisible = true;
  }

  public toggleFormVisibility(){
    this.isFormVisible = !this.isFormVisible;
  }
}
