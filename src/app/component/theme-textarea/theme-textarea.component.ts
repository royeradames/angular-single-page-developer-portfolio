import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormFieldBase } from '../../share/form-field-base.shared';

@Component({
  selector:
    'theme-textarea[control][fieldId][label][placeholder][errorDefinitions]',
  templateUrl: './theme-textarea.component.html',
  styleUrls: ['./theme-textarea.component.scss'],
})
export class ThemeTextareaComponent implements OnChanges {
  @Input() control!: FormControl;
  @Input() fieldId!: string;
  @Input() label!: string;
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