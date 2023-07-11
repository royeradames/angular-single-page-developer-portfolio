import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-return',
  templateUrl: './content-return.component.html',
  styleUrls: ['./content-return.component.scss'],
})
export class ContentReturnComponent {
  @Input() section!: string;
  ngOnInit(): void {
    this.section = this.section.toLowerCase();
  }
}
