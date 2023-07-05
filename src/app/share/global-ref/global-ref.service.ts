import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

function _window(): Window {
  // return the global native browser window object
  return window;
}

function _document(): Document {
  // return the global native browser document object
  return document;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalRef {
  mdQuerySize = 768;
  private windowSizeSubject = new BehaviorSubject<number>(window.innerWidth);

  windowSize$: Observable<number> = this.windowSizeSubject.asObservable();

  constructor() {
    this.nativeWindow.onresize = (e) => {
      this.windowSizeSubject.next(this.nativeWindow.innerWidth);
    };
  }

  get nativeWindow(): Window {
    return _window();
  }

  get nativeDocument(): Document {
    return _document();
  }
}
