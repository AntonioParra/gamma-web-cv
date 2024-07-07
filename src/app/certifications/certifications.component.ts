import { Component, Input } from '@angular/core';
import { CertificationType } from '../types/types';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {

  
  @Input() public data: CertificationType[] | undefined;

}
