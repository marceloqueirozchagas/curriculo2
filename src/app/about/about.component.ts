import { Component, OnInit } from '@angular/core';
import { AboutModel } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about: AboutModel = {
    title: 'Sobre',
    description: 'Sou um desenvolvedor de software para web com mais de 8 anos de experiência, desenvolvendo aplicações web para educação. Tenho Bacharelado em Ciência da Computação e trabalho com as tecnologias C#, SQL, JavaScript, AngularJs e Angular. Sou um intusiasta com capacidade comprovada para alavancar várias tecnologias para construir aplicativos interativos e inovadores.'
  };

  constructor() { }

  ngOnInit() {
  }

}
