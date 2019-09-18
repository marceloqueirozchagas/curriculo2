import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projectModel : ProjectModel;

  constructor() { }

  ngOnInit() {
  }

}
