import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']})
export class ProjectsComponent implements OnInit {
  project: any;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the project data from local storage
    const projectData = localStorage.getItem('project');
    this.project = projectData ? JSON.parse(projectData) : null;
  }

}
