import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SocialLinksComponent } from './component/social-links/social-links.component';
import { ContactComponent } from './main/contact/contact.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { SkillsComponent } from './main/skills/skills.component';
import { AboutComponent } from './main/about/about.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeButtonComponent } from './component/theme-button/theme-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialLinksComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ThemeButtonComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    environment.production
      ? ServiceWorkerModule.register('service-worker.js')
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
