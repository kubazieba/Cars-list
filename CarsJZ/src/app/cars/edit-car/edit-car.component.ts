import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Car} from "../models/car";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarsService} from "../services/cars.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditCarComponent implements OnInit {

  cars: Car[] = [];
  car: Car | any;

  editCarForm = new FormGroup({
    brand: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    model: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    year: new FormControl('', Validators.required)
  });

  constructor(public modal: NgbActiveModal,
              private carsService: CarsService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.setForm()
  }

  updateCar() {
    this.carsService.updateCar(this.car.id, this.editCarForm.value).subscribe(() => {
      this.modal.close();
      this.toastr.success('Car data was updated');
    });
  }

  deleteCar(car: Car) {
    this.carsService.deleteCar(car.id).subscribe(() => {
      this.modal.close();
      this.toastr.success('Car was deleted from the list');
    });
  }

  private setForm() {
    this.editCarForm = this.formBuilder.group({
      brand: [this.car.brand, [Validators.required, Validators.maxLength(18)]],
      model: [this.car.model, [Validators.required, Validators.maxLength(18)]],
      year: [this.car.year, Validators.required]
    });
  }

}
