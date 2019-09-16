import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../models/menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menus: MenuModel[] = [
    new MenuModel('Home','#home'),
    new MenuModel('Sobre','#about'),
    new MenuModel('Experiência','#experience'),
    new MenuModel('Projetos','#projects'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
