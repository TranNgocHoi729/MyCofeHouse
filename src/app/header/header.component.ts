import { Component } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  onClickMenu: Function;
  isHide: boolean;
  constructor(){
    this.isHide = true;
    this.onClickMenu = function clickMenu(){
      this.isHide = !this.isHide;
    }
  }

}
