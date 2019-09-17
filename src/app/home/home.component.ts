import { Component, OnInit } from '@angular/core';
import { PersonalModel } from './personal.model';
import { SocialModel } from './social.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public personal: PersonalModel = {
    profileImgUrl: 'assets/img/profile.jpg',
    greeting: 'Olá, eu sou',
    fullName: 'Marcelo Queiroz Chagas',
    ocupation: 'Analista de Sistemas Pleno',
    descrition: 'Full Stack Developer com mais de 8 anos de experiência, trabalhando em aplicações web para educação',
    birthDate: '21 de março, 1982',
    phoneNumber: '55 (67) 99252 2442',
    email: 'marceloqueirozchagas@hotmail.com',
    location: 'Campo Grande - MS - Brasil',
    listSocial: [
      new SocialModel('linkedin', 'https://www.linkedin.com/in/marcelo-queiroz-636307a9', 'fa fa-linkedin'),
      new SocialModel('github', 'https://github.com/marceloqueirozchagas', 'fa fa-github'),
      new SocialModel('facebook', 'https://www.facebook.com/marcelo.queiroz.125', 'fa fa-facebook'),
      new SocialModel('twitter', 'https://twitter.com/smartcelo3', 'fa fa-twitter')
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
