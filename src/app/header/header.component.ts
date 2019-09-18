import { Component, OnInit, Input } from '@angular/core';
import { HeaderModel } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerModel: HeaderModel;

  constructor() { }

  ngOnInit() {
  }

}
