import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SocialLinksComponent } from './share/component/social-links/social-links.component';
import { ContactComponent } from './main/contact/contact.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { SkillComponent } from './main/skills/skill.component';
import { AboutComponent } from './main/about/about.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeButtonComponent } from './share/component/theme-button/theme-button.component';
import { ThemeLinkComponent } from './share/component/theme-link/theme-link.component';
import { ThemeFormFieldComponent } from './share/component/theme-form-field/theme-form-field.component';
import { ThemeInputComponent } from './share/component/theme-input/theme-input.component';
import { ThemeTextareaComponent } from './share/component/theme-textarea/theme-textarea.component';
import { NgOptimizedImage } from '@angular/common';
import { DataService } from './share/data.service';
import { ProjectLinksComponent } from './main/projects/project-links/project-links.component';
import { ThemeLogoComponent } from './share/component/theme-logo/theme-logo.component';
import { ThemeToggleComponent } from './share/component/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [
    ThemeLinkComponent,
    AppComponent,
    SocialLinksComponent,
    ContactComponent,
    ProjectsComponent,
    SkillComponent,
    AboutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ThemeButtonComponent,
    ThemeFormFieldComponent,
    ThemeInputComponent,
    ThemeTextareaComponent,
    ProjectLinksComponent,
    ThemeLogoComponent,
    ThemeToggleComponent,
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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (dataService: DataService) => async () =>
        await dataService.loadData(),
      deps: [DataService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
