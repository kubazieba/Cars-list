import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsViewComponent } from './cars-view/cars-view.component';
import {SharedModule} from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import { EditCarComponent } from './edit-car/edit-car.component';
import {ToastrModule} from "ngx-toastr";
import {CarResolve} from "./services/car-resolve.service";

@NgModule({
  declarations: [
    CarsViewComponent,
    HomeComponent,
    EditCarComponent
  ],
  exports: [
    CarsViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  ],
  providers: [
    CarResolve
  ]
})
export class CarsModule { }
