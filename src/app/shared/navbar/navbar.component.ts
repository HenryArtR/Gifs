import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .rota-horizontal{
          transform: scaleX(-1);
      }
    `
  ]
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = []
  
  constructor() { }

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home'},
          {label: 'Trending Gifs', icon: 'pi pi-fw pi-calendar', routerLink: 'trending'},
          {label: 'Search Gifs', icon: 'pi pi-fw pi-file', routerLink: 'search/awesome'},
          {label: 'Memes', icon: 'pi pi-fw pi-pencil', routerLink: 'memes'}
      ];
  }

}
