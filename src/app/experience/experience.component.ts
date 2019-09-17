import { Component, OnInit } from '@angular/core';
import { TabsModel } from './tabs.model';
import { TabItemModel } from './tabItem.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public experience : TabsModel = {
    title: 'Experiência',
    itens: [
      new TabItemModel('jul 2016', 'Presente', 'Miltec', 'Tecnologia da Informação', ' - Analista de Sistemas - SQL, C#, MVC - HTML, CSS, AngularJS - Angular, Ionic'),
      new TabItemModel('jul 2015', 'jul 2016', 'SGI', 'Superintendência de Gestão da Informação', ' - Analista de Sistemas - SQL, C#, MVC - HTML, CSS, AngularJS'),
      new TabItemModel('out 2011', 'jul 2015', 'SED', 'Secretaria de Estado de Educação', ' - Analista de Sistemas - Scrum Master, SQL, C#, WebForms - HTML, CSS, Jquery')
    ]
  }

  public education : TabsModel = {
    title: 'Educação',
    itens: [
      new TabItemModel('jan 2006', 'dez 2010', 'Faculdade Campo Grande', 'Ciência da Computação', ' Bacharelado em ciência da computação')
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
