import { Component } from '@angular/core';
import { Views } from './data/views';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  views = Views
  constructor(public ui: UiService) {}
}
