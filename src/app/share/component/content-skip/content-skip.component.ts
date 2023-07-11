import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'content-skip',
  templateUrl: './content-skip.component.html',
  styleUrls: ['./content-skip.component.scss'],
})
export class ContentSkipComponent implements OnInit {
  @Input() section!: string;
  ngOnInit(): void {
    this.section = this.section.toLowerCase();
  }
}
