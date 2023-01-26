import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styles: []
})
export class DonutSingleComponent implements OnInit {
  public donut!: Donut;

  public constructor(private donutService: DonutService){

  }

  public ngOnInit(){
    const id = '3u90K1';
    this.donut = this.donutService.getDonutById(id);
  }

  public submit(donut: Donut){
    console.log('donut recieved by parentt', donut);
  }
}
