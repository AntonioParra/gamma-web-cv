import { Component, Input } from '@angular/core';
import { ProjectsType } from '../types/types';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input() public data: ProjectsType[] | undefined;
  @Input() public path: string | undefined;

}
