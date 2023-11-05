import {Component, OnInit} from '@angular/core';
import {PersonalDetailsService} from "../../../../core/services/personal-details.service";
import {IPersonalDetails} from "../../../../core/models/personal-details-interface";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails!: IPersonalDetails;

  constructor(private resumeService: PersonalDetailsService) {
  }

  ngOnInit() {
    this.getPersonalDetails();
  }

  getPersonalDetails() {
    this.resumeService.getPersonalDetails().subscribe((response: any) => {
      this.personalDetails = response;
      console.log(this.personalDetails)
    })
  }
}
