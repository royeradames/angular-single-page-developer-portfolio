import { Injectable } from '@angular/core';

function _window(): Window {
  // return the global native browser window object
  return window;
}

function _document(): Document {
  // return the global native browser document object
  return document;
}

@Injectable()
export class GlobalRef {
  get nativeWindow(): Window {
    return _window();
  }

  get nativeDocument(): Document {
    return _document();
  }
}
