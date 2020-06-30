import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public router: Router,
    public title: Title
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.track(event.urlAfterRedirects, title.getTitle());
      }
    });
  }

  track(url: string, title: string) {
    gtag("event", "page_view", {
      page_path: "/" + url,
      page_title: title
    });
    console.log("Visited ", url);
    console.log("Title ", title);
  }

}
