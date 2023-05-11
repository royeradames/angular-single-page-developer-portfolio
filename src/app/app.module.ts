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
import { ThemeButtonComponent } from './component/theme-button/theme-button.component';
import { ThemeLinkComponent } from './component/theme-link/theme-link.component';
import { LinkedinComponent } from './component/social-links/svg/linkedin/linkedin.component';
import { GithubComponent } from './component/social-links/svg/github/github.component';
import { FrontendMentorComponent } from './component/social-links/svg/frontend-mentor/frontend-mentor.component';
import { TwitterComponent } from './component/social-links/svg/twitter/twitter.component';
import { ThemeFormFieldComponent } from './component/theme-form-field/theme-form-field.component';
import { ThemeInputComponent } from './component/theme-input/theme-input.component';
import { ThemeTextareaComponent } from './component/theme-textarea/theme-textarea.component';
import { NgOptimizedImage } from '@angular/common';
@NgModule({
  declarations: [
    ThemeLinkComponent,
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
    LinkedinComponent,
    GithubComponent,
    FrontendMentorComponent,
    TwitterComponent,
    ThemeFormFieldComponent,
    ThemeInputComponent,
    ThemeTextareaComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    environment.production
      ? ServiceWorkerModule.register('service-worker.js')
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
