import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsViewComponent} from "./cars/cars-view/cars-view.component";
import {HomeComponent} from "./cars/home/home.component";
import {CarResolve} from "./cars/services/car-resolve.service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsViewComponent,
    resolve: { cars: CarResolve }
  },
  { path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
