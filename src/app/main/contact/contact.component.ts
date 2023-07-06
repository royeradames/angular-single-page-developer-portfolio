import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isValidKey } from '../../utility/is-valid-key.utility';
import { FormGroupControlsInterface } from './model/form-group-controls.interface';
import { ContactFormDataInterface } from './model/contact-form-data.interface';
import { DataService } from '../../share/data.service';
import { Email } from 'smtpts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  dataService = inject(DataService);
  pageData = this.dataService.contactPageData.value;
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
  onSubmit() {
    if (this.contactForm.invalid) {
      this.markAsTouched(this.contactForm);
      this.focusOnInvalidInput();
      return;
    }

    // get form values
    const formData = this.contactForm.value;

    // set up email data
    const emailData = {
      SecureToken: this.pageData.secureToken,
      To: this.pageData.emailTo,
      From: this.pageData.emailFrom,
      Subject: `${formData.name} <${formData.email}>`,
      Body: formData.message,
    };

    // send the email
    Email.send(emailData)
      .then((_message: any) => this.contactForm.reset())
      .catch((_errors: any) => this.markAsTouched(this.contactForm));
  }
  markAsTouched(group: FormGroup) {
    Object.keys(group.controls).forEach((field) => {
      if (isValidKey(field, group.controls)) {
        const control = group.get(field);
        if (control) {
          control.markAsTouched({ onlySelf: true });
        }
      }
    });
  }

  focusOnInvalidInput() {
    const invalidInput = document.querySelector(
      'form .ng-invalid'
    ) as HTMLElement | null;
    if (!invalidInput) return;
    if (!invalidInput.focus) return;
    invalidInput.focus();
  }
}
