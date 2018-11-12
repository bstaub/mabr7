import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.scss']
})
export class AppComponent {
  title = 'mabr7';
  OffCanvasClickedCheck = false;

  OffCanvasClicked() {
    this.OffCanvasClickedCheck = true;
  }

  CloseNavState() {
    this.OffCanvasClickedCheck = false;
  }
}
