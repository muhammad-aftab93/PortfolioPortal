import {Component, OnInit} from '@angular/core';
import {ResumeService} from "../../../../core/services/resume.service";
import {PersonalDetails} from "../../../../core/models/resume.interface";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails!: PersonalDetails;

  constructor(private resumeService: ResumeService) {
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
