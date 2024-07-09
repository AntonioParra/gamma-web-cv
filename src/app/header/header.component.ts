import { Component, Input } from '@angular/core';
import { HeaderType } from '../types/types';
import { NgArrayPipesModule } from 'ngx-pipes';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgArrayPipesModule, InlineSVGModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() public data: HeaderType | undefined;

  scrollTo(target: string) {
    window.scrollTo({top: document.getElementById(target)?.offsetTop});
  }

}
