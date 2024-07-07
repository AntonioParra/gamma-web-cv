import { Component, Input } from '@angular/core';
import { ExpertiseType } from '../types/types';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class ExpertiseComponent {
  
  @Input() public data: ExpertiseType[] | undefined;

}
