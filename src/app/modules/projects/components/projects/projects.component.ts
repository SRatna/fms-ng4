import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Project } from '../../classes/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project = new Project();
  projects: Project[];
  private Url = 'http://localhost/advanced/api/web/v1/projects';


  constructor(private commonService: CommonService) { }

  save(): void {
    this.commonService.create(this.project, this.Url)
      .subscribe(obj => this.projects.push(obj), error => console.log(error));
  }

  deleteProject(project: Project): void {
    if (confirm('Do you really want to delete?')) {
      this.commonService.remove(project, this.Url)
        .subscribe(deletedObj => this.projects = this.projects.filter(o => o !== deletedObj), err => console.log(err));
    }

  }

  getProjects(): void {
    this.commonService
      .getObjects(this.Url)
      .subscribe(objects => this.projects = objects, err => console.log(err));
  }

  ngOnInit() {
    this.getProjects();
  }

}
