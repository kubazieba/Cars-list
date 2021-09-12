import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const options = {
      strings: ['challenges.', 'projects.', 'experiences.'],
      typeSpeed: 50,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typing', options);
  }

}
