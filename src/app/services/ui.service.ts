import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Views } from '../data/views';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private view: Views = Views.home
  constructor(private snack: MatSnackBar) { }

  public setView(newView: Views) {
    this.view = newView
  }

  public getView(): Views {
    return this.view
  }

  public prompt(message: string): void {
    this.snack.open(message, 'Close')
  }
}
