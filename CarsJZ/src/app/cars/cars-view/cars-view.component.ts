import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CarsService} from "../services/cars.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car} from "../models/car";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditCarComponent} from "../edit-car/edit-car.component";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsViewComponent implements OnInit {

  cars: Car[] = [];
  model: any;
  page = 1;

  carForm = new FormGroup({
    brand: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    model: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    year: new FormControl('', Validators.required)
  });

  constructor(private carsService: CarsService,
              private modalService: NgbModal,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.cars = this.route.snapshot.data['cars'];
  }

  clearForm() {
    this.carForm.reset();
  }

  fetchData() {
    this.carsService.getCars().subscribe(data => {
      this.cars = data;
      this.changeDetector.detectChanges();
    });
  }

  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.toastr.success('Car was added');
      this.carForm.reset();
      this.fetchData();
    });
  }

  editCar(car: Car) {
    const ref = this.modalService.open(EditCarComponent);
    ref.componentInstance.car = car;

    ref.result.then((yes) => {
      this.fetchData();
    },
    (cancel) => {

    });
  }

  filterByModel() {
    if (this.model == "") {
      this.fetchData();
    } else {
      this.cars = this.cars.filter(res => {
        return res.model.toLocaleLowerCase().match(this.model.toLocaleLowerCase().trim());
      });
    }
  }

  keyword: any;
  reverse = false;
  sort(keyword: any) {
    this.keyword = keyword;
    this.reverse = !this.reverse;
  }

}
