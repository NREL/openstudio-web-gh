import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContributionPolicyComponent } from './contribution-policy/contribution-policy.component';
import { DeveloperNewsComponent } from './developer-news/developer-news.component';
import { DevelopersComponent } from './developers/developers.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: 'developer-news',
  component: DeveloperNewsComponent
}, {
  path: 'developer-news/:timestamp',
  component: NewsDetailComponent
}, {
  path: 'developers',
  component: DevelopersComponent
}, {
  path: 'downloads',
  component: DownloadsComponent
}, {
  path: 'forum',
  component: ForumComponent
}, {
  path: 'news',
  component: NewsComponent
}, {
  path: 'news/:timestamp',
  component: NewsDetailComponent
}, {
  path: 'openstudio-contribution-policy',
  component: ContributionPolicyComponent
}, {
  path: 'publications',
  component: PublicationsComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
