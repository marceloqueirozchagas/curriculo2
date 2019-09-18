import { Component, OnInit, Input } from '@angular/core';
import { HomeModel } from './homeModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() homeModel: HomeModel;

  constructor() { }

  ngOnInit() {
  }

}
