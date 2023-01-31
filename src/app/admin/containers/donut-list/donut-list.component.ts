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
  public _isLoading: boolean = true;

  public get isLoading(): boolean{
    return this._isLoading;
  }

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.isFormVisible = false;
    this.initList();
  }

  public trackById(index: number, value: Donut) {
    return value.id;
  }

  public submit(donut:Donut){
       this.addDonut(donut);
  }

  private initList(){
    this.getDonuts();
  }

  private getDonuts(): void{
    this.donutService.getAllDonuts().subscribe(donuts => {
      this.donuts = donuts
      this._isLoading = false;
    });
  }

  private addDonut(donut: Donut){
    this._isLoading = true;
    this.donutService.addDonut(donut).subscribe(donut => {
      this._isLoading = false; 
      this.initList();
      this.toggleFormVisibility();
    });
  }

  public onAdd(){
    this.isFormVisible = true;
  }

  public toggleFormVisibility(){
    this.isFormVisible = !this.isFormVisible;
  }

  public removeDonut(donut: Donut){
    let deleteConfirmed = confirm(`Are you sure you want to delete donut ${donut.id}?`);
    let id = donut.id!;

    if(deleteConfirmed){
      this._isLoading = true;
      this.donutService.deleteDonut(id).subscribe(() => {
        this.initList();
        
      })
    } else {
      alert('Delete Cancelled.');
    }
  }
}
