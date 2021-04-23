import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LuxonModule } from 'luxon-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeSidebarComponent } from './home/components/home-sidebar/home-sidebar.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DevelopersComponent } from './developers/developers.component';
import { ForumComponent } from './forum/forum.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContributionPolicyComponent } from './contribution-policy/contribution-policy.component';
import { ReleaseCardComponent } from './shared/components/release-card/release-card.component';
import { NewsItemComponent } from './shared/components/news-item/news-item.component';
import { TruncateHTMLPipe } from './shared/pipes/truncate-html.pipe';
import { NewsComponent } from './news/news.component';
import { DeveloperNewsComponent } from './developer-news/developer-news.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributionPolicyComponent,
    DevelopersComponent,
    DownloadsComponent,
    FooterComponent,
    ForumComponent,
    HomeComponent,
    HomeSidebarComponent,
    NavbarComponent,
    NewsItemComponent,
    PublicationsComponent,
    ReleaseCardComponent,
    TruncateHTMLPipe,
    NewsComponent,
    DeveloperNewsComponent,
    PaginationComponent,
    NewsDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LuxonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
