import {Component, OnInit} from '@angular/core';
import {PersonalDetailsService} from "../../../../core/services/personal-details.service";
import {IPersonalDetails} from "../../../../core/models/personal-details-interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails!: IPersonalDetails;
  isEditing: boolean = false;
  personalForm!: FormGroup;

  constructor(private resumeService: PersonalDetailsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getPersonalDetails();
    this.initPersonalForm();
  }

  getPersonalDetails() {
    this.resumeService.getPersonalDetails().subscribe((response: IPersonalDetails) => {
      this.personalDetails = response;
      console.log(this.personalDetails)
    })
  }

  initPersonalForm() {
    this.personalForm = this.formBuilder.group({
      designation: [''],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      id: ['', Validators.required],
      lastName: [''],
      location: [''],
      middleName: [''],
      personalStatement: [''],
      phoneNumber: [''],
      picture: [''],
      role: [''],
      userId: ['']
    });
  }

  onEdit() {
    this.isEditing = true;
    this.personalForm.patchValue(this.personalDetails);
  }

  onCancel() {
    this.isEditing = false;
  }

  onSubmit() {
    if (this.personalForm.invalid) {
      this.personalForm.markAllAsTouched();
      return;
    }
    this.resumeService.updatePersonalDetails(this.personalForm.value).subscribe((personalDetails) => {
      this.personalDetails = personalDetails;
      this.isEditing = false;
    })
  }
}
