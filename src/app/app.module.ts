import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './admin/containers/donut-single/donut-single.component';

const ROUTES: Routes = [
  {path: 'donuts', component:DonutListComponent},
  {path: 'donut', component: DonutSingleComponent},
  {path: '', pathMatch:'full',  redirectTo:'donuts'}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AdminModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
