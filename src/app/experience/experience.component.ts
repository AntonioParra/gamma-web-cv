import { Component, Input } from '@angular/core';
import { ExperienceType } from '../types/types';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  
  @Input() public data: ExperienceType[] | undefined;

}
