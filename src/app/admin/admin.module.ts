import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Router, RouterModule, Routes} from '@angular/router';
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';

const ROUTES: Routes = [
  {path: 'donuts', component:DonutListComponent},
  {path: 'donut', component: DonutSingleComponent},
  {path: '', pathMatch:'full',  redirectTo:'donuts'}
];

@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent, 
    DonutSingleComponent, 
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class AdminModule {}
