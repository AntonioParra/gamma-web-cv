import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CvService } from '../services/cv.service';
import { CvType } from '../types/types';
import { SimplePersonalComponent } from '../simple-personal/simple-personal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SimplePersonalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private people: string[] = ['apr', 'jjsb', 'jjg'];
  public cvs: {path: string, cv: CvType}[] | undefined;

  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    document.title = 'CVs'
    forkJoin(this.people.map(person => this.cvService.getCV(person))).subscribe((data: any) => {
      this.cvs = data.map((item: CvType, index: number) => ({
        path: this.people[index],
        cv: item
      }));
    });
    
  }
}
