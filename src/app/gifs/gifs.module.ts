import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipsComponent } from './pages/clips/clips.component';
import { HomeComponent } from './pages/home/home.component';
import { MemesComponent } from './pages/memes/memes.component';
import { SearchComponent } from './pages/search/search.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ClipsComponent,
    HomeComponent,
    MemesComponent,
    SearchComponent,
    TrendingComponent
  ],
  exports: [
    ClipsComponent,
    HomeComponent,
    MemesComponent,
    SearchComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class GifsModule { }
