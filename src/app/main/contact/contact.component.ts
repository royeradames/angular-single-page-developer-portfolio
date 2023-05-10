import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { isValidKey } from '../../utility/is-valid-key.utility';
import { getControlName } from '../../utility/get-control-name.utility';
import { FormGroupControlsInterface } from './model/form-group-controls.interface';
import { ContactFormDataInterface } from './model/contact-form-data.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  fb = inject(FormBuilder);
  contactForm = this.fb.group<
    FormGroupControlsInterface<ContactFormDataInterface>
  >({
    name: ['', { validators: [Validators.required], nonNullable: true }],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      },
    ],
    message: ['', { validators: [Validators.required], nonNullable: true }],
  });
  getControlName = getControlName;

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      // send form data to server or perform any other action
      console.log(this.contactForm.value);
      this.contactForm.reset();
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
