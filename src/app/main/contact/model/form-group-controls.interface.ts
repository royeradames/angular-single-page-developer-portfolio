import { Validators } from '@angular/forms';

export type FormGroupControlsInterface<T> = {
  [key in keyof T]: [T[key], { validators: Validators[]; nonNullable?: true }];
};
