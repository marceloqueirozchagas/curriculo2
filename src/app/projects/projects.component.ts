import { Component, OnInit } from '@angular/core';
import { projectModel } from './project.model';
import { ProjectItemModel } from './projectItem.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public project : projectModel = {
    title: 'Projetos',
    description : 'Alguns dos meus projetos pessoais, para treinamento de tecnologias e compartilhar com a comunidade',
    itens: [
      new ProjectItemModel('Ionic - Livros','Projeto com o framework Ionic 4 para registro de livros lidos', '../../assets/img/project.png', 'https://github.com/marceloqueirozchagas/livros'),
      new ProjectItemModel('Currículo','Projeto em Angular para web site profissional', '../../assets/img/project.png', 'https://github.com/marceloqueirozchagas/curriculo2')
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
