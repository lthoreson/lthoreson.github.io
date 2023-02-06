import { Component } from '@angular/core';
import { Views } from 'src/app/data/views';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  views = Views
  constructor(public ui: UiService) {}

}
