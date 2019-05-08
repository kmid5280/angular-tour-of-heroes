import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';
  constructor() { }

  ngOnInit() {
    //This is a lifecycle hook. Performs complex initializations after construction and sets up component after input properties are set.
  }

}
