import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector:
    'theme-textarea[control][fieldId][label][placeholder][errorDefinitions]',
  templateUrl: './theme-textarea.component.html',
  styleUrls: ['./theme-textarea.component.scss'],
})
export class ThemeTextareaComponent {
  @Input() control!: FormControl;
  @Input() fieldId!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() errorDefinitions!: { [key: string]: string };

  get isInvalid() {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  get errorMessages() {
    const errors = this.control.errors;
    if (errors) {
      return Object.keys(errors).map((key) => this.errorDefinitions[key]);
    }
    return [];
  }

  get inputClasses() {
    return {
      'border-custom-red': this.isInvalid,
      'border-custom-green':
        this.control.valid && (this.control.dirty || this.control.touched),
      'border-custom-white': !(this.control.dirty || this.control.touched),
    };
  }
}
