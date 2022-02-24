import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .rota-horizontal{
          transform: scaleX(-1);
      }
      .headerImg{
        width: 50px;
      }
    `
  ]
})
export class NavbarComponent {
  
  constructor() { }


}
