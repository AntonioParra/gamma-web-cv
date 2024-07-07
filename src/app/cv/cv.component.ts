import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { CvType } from '../types/types';
import { PersonalComponent } from '../personal/personal.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ExpertiseComponent } from '../expertise/expertise.component';
import { EducationComponent } from '../education/education.component';
import { CertificationsComponent } from '../certifications/certifications.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [HeaderComponent, PersonalComponent, ExperienceComponent, ExpertiseComponent, EducationComponent, CertificationsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {

  public cvData: CvType | undefined;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.http.get('/data/jjsb/cv.json').subscribe((data: any) => {
      this.cvData = data;
      document.title = data.title;
    });
  }


}
