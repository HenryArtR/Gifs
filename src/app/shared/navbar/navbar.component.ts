import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = []
  
  constructor() { }

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home'},
          {label: 'Trending Gifs', icon: 'pi pi-fw pi-calendar', routerLink: 'trending'},
          {label: 'Search Gifs', icon: 'pi pi-fw pi-file', routerLink: 'search'},
          {label: 'Memes', icon: 'pi pi-fw pi-pencil', routerLink: 'memes'},
          {label: 'Clips', icon: 'pi pi-fw pi-cog', routerLink: 'clips'}
      ];
  }

}
