import { Component, Input } from '@angular/core';
import { EducationType } from '../types/types';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  
  @Input() public data: EducationType[] | undefined;

}
