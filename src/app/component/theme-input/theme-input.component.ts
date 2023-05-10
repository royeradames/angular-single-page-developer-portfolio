import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormFieldBase } from '../../share/form-field-base.shared';

@Component({
  selector:
    'theme-input[errorDefinitions][placeholder][label][fieldId][control]',
  templateUrl: './theme-input.component.html',
  styleUrls: ['./theme-input.component.scss'],
})
export class ThemeInputComponent implements OnChanges {
  @Input() control!: FormControl;
  @Input() fieldId!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder!: string;
  @Input() errorDefinitions!: { [key: string]: string };

  base!: FormFieldBase;

  ngOnChanges() {
    this.base = new FormFieldBase({
      control: this.control,
      fieldId: this.fieldId,
      label: this.label,
      placeholder: this.placeholder,
      errorDefinitions: this.errorDefinitions,
    });
  }
}
