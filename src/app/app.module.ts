import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LuxonModule } from 'luxon-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributionPolicyComponent } from './contribution-policy/contribution-policy.component';
import { DeveloperNewsComponent } from './developer-news/developer-news.component';
import { DevelopersComponent } from './developers/developers.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { FooterComponent } from './footer/footer.component';
import { ForumComponent } from './forum/forum.component';
import { HomeSidebarComponent } from './home/components/home-sidebar/home-sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { NewsItemComponent } from './shared/components/news-item/news-item.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { ReleaseCardComponent } from './shared/components/release-card/release-card.component';
import { TruncateHTMLPipe } from './shared/pipes/truncate-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContributionPolicyComponent,
    DeveloperNewsComponent,
    DevelopersComponent,
    DownloadsComponent,
    FooterComponent,
    ForumComponent,
    HomeComponent,
    HomeSidebarComponent,
    NavbarComponent,
    NewsComponent,
    NewsDetailComponent,
    NewsItemComponent,
    PaginationComponent,
    PublicationsComponent,
    ReleaseCardComponent,
    TruncateHTMLPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    LuxonModule,
    NgbCollapseModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
