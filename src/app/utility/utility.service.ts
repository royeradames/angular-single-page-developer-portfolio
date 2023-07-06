import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}
  labelToId(label: string): string {
    return label.toLowerCase().replace(/\s+/g, '-');
  }
}
