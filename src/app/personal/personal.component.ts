import { Component, Input } from '@angular/core';
import { PersonalType } from '../types/types';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [InlineSVGModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent {

  @Input() public data: PersonalType | undefined;

}