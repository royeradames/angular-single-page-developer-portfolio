import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type FormGroupControls<T> = {
  [key in keyof T]: AbstractControl;
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroupControls<ContactFormData>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    }) as FormGroupControls<ContactFormData>;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // send form data to server or perform any other action
      console.log(this.contactForm.value);
    } else {
      // mark all fields as touched to display validation errors
      Object.keys(this.contactForm).forEach((field) => {
        const control = this.contactForm[field];
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
