import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './gifs/pages/home/home.component';
import { MemesComponent } from './gifs/pages/memes/memes.component';
import { SearchComponent } from './gifs/pages/search/search.component';
import { TrendingComponent } from './gifs/pages/trending/trending.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'memes', component: MemesComponent},
  {path: 'search/:value', component: SearchComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
