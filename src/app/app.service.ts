import { Injectable } from '@angular/core';
import { HeaderModel } from './header/header.model';
import { HomeModel } from './home/homeModel';
import { AboutModel } from './about/about.model';
import { ExperienceModel } from './experience/experience.model';
import { ProjectModel } from './projects/project.model';
import { SocialModel } from './home/social.model';
import { MenuModel } from './header/menu.model';
import { ProjectItemModel } from './projects/projectItem.model';
import { TabItemModel } from './experience/tabItem.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getHeaderData(): Promise<HeaderModel> {
    let header: HeaderModel = {
      title: '',
      menus: [
        new MenuModel('Home', '#home'),
        new MenuModel('Sobre', '#about'),
        new MenuModel('Experiência', '#experience'),
        new MenuModel('Projetos', '#projects'),
      ]
    }

    return new Promise<HeaderModel>((resolve) => {
      resolve(header)
    });
  }

  getHomeData(): Promise<HomeModel> {
    let homeModel: HomeModel = {
      title: '',
      personal: {
        profileImgUrl: 'assets/img/profile.jpg',
        greeting: 'Olá, eu sou',
        fullName: 'Marcelo Queiroz Chagas',
        ocupation: 'Analista de Sistemas Pleno',
        description: 'Full Stack Developer com mais de 8 anos de experiência, trabalhando em aplicações web para educação',
        birthDate: '21 de março, 1982',
        phoneNumber: '55 (67) 99252 2442',
        email: 'marceloqueirozchagas@hotmail.com',
        location: 'Campo Grande - MS - Brasil'
      },
      listSocial: [
        new SocialModel('linkedin', 'https://www.linkedin.com/in/marcelo-queiroz-636307a9', 'fa fa-linkedin'),
        new SocialModel('github', 'https://github.com/marceloqueirozchagas', 'fa fa-github'),
        new SocialModel('facebook', 'https://www.facebook.com/marcelo.queiroz.125', 'fa fa-facebook'),
        new SocialModel('twitter', 'https://twitter.com/smartcelo3', 'fa fa-twitter')
      ]
    };

    return new Promise<HomeModel>((resolve) => {
      resolve(homeModel)
    });
  }

  getAboutData(): Promise<AboutModel> {
    let about: AboutModel = {
      title: 'Sobre',
      description: 'Sou um desenvolvedor de software para web com mais de 8 anos de experiência, desenvolvendo aplicações web para educação. Tenho Bacharelado em Ciência da Computação e trabalho com as tecnologias C#, SQL, JavaScript, AngularJs e Angular. Sou um intusiasta com capacidade comprovada para alavancar várias tecnologias para construir aplicativos interativos e inovadores.'
    };

    return new Promise<AboutModel>((resolve) => {
      resolve(about)
    });
  }

  getExperienceData(): Promise<ExperienceModel> {
    let experience: ExperienceModel = {
      title: '',
      experience: {
        title: 'Experiência',
        itens: [
          new TabItemModel('jul 2016', 'Presente', 'Miltec', 'Tecnologia da Informação', ' - Analista de Sistemas - SQL, C#, MVC - HTML, CSS, AngularJS - Angular, Ionic'),
          new TabItemModel('jul 2015', 'jul 2016', 'SGI', 'Superintendência de Gestão da Informação', ' - Analista de Sistemas - SQL, C#, MVC - HTML, CSS, AngularJS'),
          new TabItemModel('out 2011', 'jul 2015', 'SED', 'Secretaria de Estado de Educação', ' - Analista de Sistemas - Scrum Master, SQL, C#, WebForms - HTML, CSS, Jquery')
        ]
      },
      education: {
        title: 'Educação',
        itens: [
          new TabItemModel('jan 2006', 'dez 2010', 'Faculdade Campo Grande', 'Ciência da Computação', ' Bacharelado em ciência da computação')
        ]
      }
    }

    return new Promise<ExperienceModel>((resolve) => {
      resolve(experience)
    });
  }

  getProjectsData(): Promise<ProjectModel> {
    let project: ProjectModel = {
      title: 'Projetos',
      description: 'Alguns dos meus projetos pessoais, para treinamento de tecnologias e compartilhar com a comunidade',
      itens: [
        new ProjectItemModel('Ionic - Livros', 'Projeto com o framework Ionic 4 para registro de livros lidos', '../../assets/img/project.png', 'https://github.com/marceloqueirozchagas/livros'),
        new ProjectItemModel('Currículo', 'Projeto em Angular para web site profissional', '../../assets/img/project.png', 'https://github.com/marceloqueirozchagas/curriculo2')
      ]
    }

    return new Promise<ProjectModel>((resolve) => {
      resolve(project)
    });
  }
}
