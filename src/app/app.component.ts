import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
