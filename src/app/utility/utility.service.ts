import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}
  labelToId(label: string): string {
    return label.toLowerCase().replace(/\s+/g, '-');
  }

  isControlRequired(control: FormControl): true | null {
    const validatorObject = control?.validator?.({} as AbstractControl);
    return validatorObject?.['required'] ? true : null;
  }
}
