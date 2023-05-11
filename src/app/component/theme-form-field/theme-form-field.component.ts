import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'theme-form-field[errorDefinitions][label][fieldId][control]',
  templateUrl: './theme-form-field.component.html',
  styleUrls: ['./theme-form-field.component.scss'],
})
export class ThemeFormFieldComponent {
  @Input() control!: FormControl;
  @Input() fieldId!: string;
  @Input() label!: string;
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
}
