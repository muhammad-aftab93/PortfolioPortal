import { Component, Input } from '@angular/core';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { PersonalDetailsService } from 'src/app/core/services/personal-details.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  userImage: string = '';


  constructor(private classToggler: ClassToggleService,
    public personalDetailsService: PersonalDetailsService) {
      super();
      this.personalDetailsService
      .getUserImage()
      .subscribe(userImage => {
        this.userImage = userImage;
      });
  }
}
