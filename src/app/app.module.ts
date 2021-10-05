import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrendingComponent } from './trending/trending.component';
import { MainComponent } from './main/main.component';
import { TopComponent } from './top/top.component';
import { RightComponent } from './right/right.component';
import { BottomComponent } from './bottom/bottom.component';
import { ArticlesDynamicComponent } from './articles-dynamic/articles-dynamic.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingComponent,
    MainComponent,
    TopComponent,
    RightComponent,
    BottomComponent,
    ArticlesDynamicComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
