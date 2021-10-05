import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticlesDynamicComponent } from './articles-dynamic/articles-dynamic.component';
import { BottomComponent } from './bottom/bottom.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RightComponent } from './right/right.component';
import { TopComponent } from './top/top.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {
    path : "header",
    component : HeaderComponent
  },
  {
    path : "trending",
    component : TrendingComponent
  },
  {
    path : "main",
    component : MainComponent
  },
  {
    path : "top", // user-edit/aabbb
    component : TopComponent
  },
  {
    path : "bottom",
    component : BottomComponent
  },
  {
    path: "right/:name",
    component: RightComponent
  },
  {
    path : "articlesDynamic",
    component : ArticlesDynamicComponent
  },
  {
    path: "article",
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent, TopComponent, BottomComponent, RightComponent, ArticleComponent]