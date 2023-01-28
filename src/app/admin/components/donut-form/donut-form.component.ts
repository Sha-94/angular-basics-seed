import { ViewChild } from '@angular/core';
import { EventEmitter, AfterViewInit, Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';
import { Promo } from '../../models/constants/promo.enum';


@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss']
})
export class DonutFormComponent implements OnInit, AfterViewInit {
  @Output() onSubmit = new EventEmitter<Donut>();
  @Input('donut') donut!: Donut;
  public PROMO = Promo;

  public icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon'
  ]
  ngOnInit(){
    this.donut = this.donut ?? {name: '', icon: '', price: 0, description:''}
  }

  ngAfterViewInit(){
    
  }

  public handleSubmit(form: NgForm){
    if(this.isFormValid(form)){
      console.log(form);
      this.onSubmit.emit(form.value);
    }
    
  }

  public isFormValid(form: NgForm){
    return form.valid;
  }
}
