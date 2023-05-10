import { FormControl } from '@angular/forms';

export class FormFieldBase {
  control: FormControl;
  fieldId: string;
  label: string;
  placeholder: string;
  errorDefinitions: { [key: string]: string };

  constructor(options: {
    control: FormControl;
    fieldId: string;
    label: string;
    placeholder: string;
    errorDefinitions: { [key: string]: string };
  }) {
    this.control = options.control;
    this.fieldId = options.fieldId;
    this.label = options.label;
    this.placeholder = options.placeholder;
    this.errorDefinitions = options.errorDefinitions;
  }

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
