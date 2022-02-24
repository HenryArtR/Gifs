import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MemesComponent } from './pages/memes/memes.component';
import { SearchComponent } from './pages/search/search.component';
import { TrendingComponent } from './pages/trending/trending.component';



@NgModule({
  declarations: [
    HomeComponent,
    MemesComponent,
    SearchComponent,
    TrendingComponent
  ],
  exports: [
    HomeComponent,
    MemesComponent,
    SearchComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class GifsModule { }
