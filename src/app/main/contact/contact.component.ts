import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { isValidKey } from '../../utility/is-valid-key.utility';
import { getControlName } from '../../utility/get-control-name.utility';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type FormGroupControls<T> = {
  [key in keyof T]: FormControl<T[key]>;
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup<FormGroupControls<ContactFormData>>;
  getControlName = getControlName;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = new FormGroup<FormGroupControls<ContactFormData>>({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      message: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      // send form data to server or perform any other action
      console.log(this.contactForm.value);
    } else {
      // mark all fields as touched to display validation errors
      Object.keys(this.contactForm.controls).forEach((field) => {
        if (isValidKey(field, this.contactForm.controls)) {
          const control = this.contactForm.get(field);
          if (control) {
            control.markAsTouched({ onlySelf: true });
          }
        }
      });
    }
  }
}
