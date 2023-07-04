import { Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { DataService } from '../../share/data.service';
import { Subscription } from 'rxjs';
import { GlobalRef } from '../../share/window-ref.injectable';

@Component({
  selector: 'app-skills',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnDestroy {
  isExpanded = false;
  skillPageData = this.dataService.skillPageData.value;
  spanButtonText = this.skillPageData.showButtonText;
  trimmedSkillsCollection = this.skillPageData.Skills.slice(0, 10);
  private mdQuerySize = 768;
  skills = this.initSkills();
  private dataSubscription?: Subscription;
  constructor(
    private dataService: DataService,
    private elementRef: ElementRef,
    private globalRef: GlobalRef
  ) {
    this.dataSubscription = this.dataService.skillPageData.subscribe(
      (skillPageData) => {
        this.skillPageData = skillPageData;
      }
    );
    this.adjustSkills(this.globalRef.nativeWindow.innerWidth);
  }

  private initSkills() {
    if (this.globalRef.nativeWindow.innerWidth <= this.mdQuerySize) {
      return this.trimmedSkillsCollection;
    }
    return this.skillPageData.Skills;
  }
  scrollToSkills(): void {
    const skillsSection =
      this.elementRef.nativeElement.querySelector('#skills');
    if (skillsSection) {
      skillsSection.scrollIntoView();
    }
  }

  toggleIsExpanded(): void {
    this.isExpanded = !this.isExpanded;
    this.spanButtonText = this.isExpanded
      ? this.skillPageData.hideButtonText
      : this.skillPageData.showButtonText;
    this.skills = this.isExpanded
      ? this.skillPageData.Skills
      : this.trimmedSkillsCollection;
    if (!this.isExpanded) {
      this.scrollToSkills();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustSkills(this.globalRef.nativeWindow.innerWidth);
  }

  adjustSkills(windowWidth: number): void {
    if (windowWidth > this.mdQuerySize) {
      this.skills = this.skillPageData.Skills;
    }
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
}
