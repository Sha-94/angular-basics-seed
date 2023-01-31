import { Injectable } from "@angular/core";
import { Promo } from '../models/constants/promo.enum';
import { Donut } from '../models/donut.model';
import { Environment } from '../models/constants/environment.enum';
import { HttpClient} from '@angular/common/http';

import { map, tap, of,  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts!: Donut[];
  private URL: string = `${Environment.JSON_SERVER}/donuts`;
  constructor(private httpClient: HttpClient){
    this.donuts = [];
  }

  public getDonutById(id: string): Observable<Donut> {
    return this.getAllDonuts().pipe(
       map(donuts => {
         const donut = donuts.find(donut => donut.id === id);
         return donut || {name: '', icon: '', price: 0, description: ''}
       })
     );
  }

  public getAllDonuts(): Observable< Donut[]>{
    if(this.donuts.length){
      console.log('Getting Donuts from cache: ', this.donuts);

      return of(this.donuts);
    }
    return this.httpClient.get<Donut[]>(this.URL).pipe(
      tap(donuts => {
        console.log('Getting Donuts from server: ', this.donuts);

        this.donuts = donuts
      })
    )
  }

  public addDonut(newDonut: Donut): Observable<Donut>{
    console.log('Adding New Donut: ', newDonut);
    return this.httpClient.post<Donut>(this.URL, newDonut).pipe(
      tap(donut => this.donuts = [...this.donuts, donut])
    )
  }

  public updateDonut(newDonut: Donut): Observable<Donut> {
    return this.httpClient.put<Donut>(`${this.URL}/${newDonut.id}`, newDonut).pipe(
      tap(donut => {
        this.donuts = this.donuts.map(item => {
          if(item.id === newDonut.id){
            return newDonut;
          }
          return item;
        })
      })
    );
  }

  public deleteDonut(id: string): Observable<Donut> {
    return this.httpClient.delete<Donut>(`${this.URL}/${id}`).pipe(
      tap( donut => {
        this.donuts = this.donuts.filter(item => item.id != id );
      })
    )
  }

}