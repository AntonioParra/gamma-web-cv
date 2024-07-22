import { Component, Input } from '@angular/core';
import { PersonalType } from '../types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-personal',
  standalone: true,
  imports: [],
  templateUrl: './simple-personal.component.html',
  styleUrl: './simple-personal.component.scss'
})
export class SimplePersonalComponent {
  @Input() public data: PersonalType | undefined;
  @Input() public path: string | undefined;

  easterEggTimeout: any;

  constructor(
    private router: Router
  ) {}

  navTo() {
    this.router.navigateByUrl(this.path!);
  }

  mouseEnter() {
    this.easterEggTimeout = setTimeout(this.doEasterEgg.bind(this), 10*1000);
  }

  mouseLeave() {
    clearTimeout(this.easterEggTimeout);
  }

  doEasterEgg() {
    if(this.path === 'jjg') {
      new Audio('/cv/cuack.mp3').play();
    }
  }
}
