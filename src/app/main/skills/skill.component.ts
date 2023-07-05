import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../share/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements AfterViewInit {
  isExpanded = false;
  skillPageData = this.dataService.skillPageData.value;
  spanButtonText = this.skillPageData.showButtonText;
  skills = this.skillPageData.Skills;
  @ViewChild('expandButton') expandButton!: ElementRef;
  isButtonVisible: boolean | undefined;

  constructor(
    private dataService: DataService,
    private elementRef: ElementRef
  ) {}
  ngAfterViewInit(): void {
    this.isButtonVisible =
      !this.expandButton.nativeElement.classList.contains('hidden');
  }

  scrollToSkills(): void {
    const skillsSection =
      this.elementRef.nativeElement.querySelector('#skills');
    if (!skillsSection) return;
    skillsSection.scrollIntoView();
  }

  toggleIsExpanded(): void {
    this.isExpanded = !this.isExpanded;
    this.spanButtonText = this.isExpanded
      ? this.skillPageData.hideButtonText
      : this.skillPageData.showButtonText;
    if (!this.isExpanded) {
      this.scrollToSkills();
    }
  }
}
