import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Angular PWA App';

  constructor(
    private swUpdate: SwUpdate
  ) { }

  ngOnInit(): void {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if (confirm('There´s a new version available. Would you like to load the new version?')) {

          window.location.reload();
        }
      });
    }
  }

}
