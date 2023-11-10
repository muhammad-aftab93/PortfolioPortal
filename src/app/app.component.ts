import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {IconSetService} from '@coreui/icons-angular';
import {iconSubset} from './icons/icon-subset';
import {Title} from '@angular/platform-browser';
import {autoLogin} from "./account/store/auth.actions";
import {Store} from "@ngrx/store";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio Portal';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private store: Store
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = {...iconSubset};
  }

  ngOnInit(): void {
    this.store.dispatch(autoLogin());
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
