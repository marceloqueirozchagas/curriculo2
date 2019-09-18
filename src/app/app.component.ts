import { Component, OnInit } from '@angular/core';
import { HeaderModel } from './header/header.model';
import { HomeModel } from './home/homeModel';
import { AboutModel } from './about/about.model';
import { ExperienceModel } from './experience/experience.model';
import { ProjectModel } from './projects/project.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public headerModel: HeaderModel;
  public homeModel: HomeModel;
  public aboutModel: AboutModel;
  public experienceModel: ExperienceModel
  public projectModel: ProjectModel;

  constructor(
    private appSvc: AppService
  ) { }

  public ngOnInit(): void {
    this.appSvc.getHeaderData().then(response => {
      this.headerModel = response
    })

    this.appSvc.getHomeData().then(response => {
      this.homeModel = response
    })

    this.appSvc.getAboutData().then(response => {
      this.aboutModel = response;
    })

    this.appSvc.getExperienceData().then(response => {
      this.experienceModel = response
    })

    this.appSvc.getProjectsData().then(response => {
      this.projectModel = response
    })
  }
}