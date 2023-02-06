import { Injectable } from '@angular/core';
import { Views } from '../data/views';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private view: Views = Views.home
  constructor() { }

  public setView(newView: Views) {
    this.view = newView
  }

  public getView(): Views {
    return this.view
  }
}
