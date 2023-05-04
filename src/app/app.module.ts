import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from "@angular/service-worker";
import { SocialLinksComponent } from './social-links/social-links.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialLinksComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('service-worker.js') : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
