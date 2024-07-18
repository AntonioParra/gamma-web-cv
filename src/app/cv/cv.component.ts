import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CvType } from '../types/types';
import { PersonalComponent } from '../personal/personal.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ExpertiseComponent } from '../expertise/expertise.component';
import { EducationComponent } from '../education/education.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [HeaderComponent, PersonalComponent, ExperienceComponent, ExpertiseComponent, EducationComponent, CertificationsComponent, ProjectsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {

  public path: string = '';
  public cvData: CvType | undefined;

  constructor(
    private cvService: CvService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    
    this.route.url.subscribe(url => {
      this.path = url[0]?.path;
      this.cvService.getCV(this.path).subscribe((data: any) => {
        this.cvData = data;
        document.title = data.title;
      });
    });

    
  }


}
