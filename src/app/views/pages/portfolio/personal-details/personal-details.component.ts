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
  alertStatus: string = '';
  alertMessage: string = '';
  alertTitle: string = '';
  alertVisible: boolean = false;
  modalVisible = false;
  selectedFile: File | null = null;

  constructor(private personalDetailsService: PersonalDetailsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getPersonalDetails();
    this.initPersonalForm();
  }

  getPersonalDetails() {
    this.personalDetailsService.getPersonalDetails().subscribe((response: IPersonalDetails) => {
      this.personalDetails = response;
      this.personalDetailsService.setUserImage(this.personalDetails.picture ? this.personalDetails.picture : '');
    });
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
    this.personalDetailsService.updatePersonalDetails(this.personalForm.value).subscribe((personalDetails) => {
      this.personalDetails = personalDetails;
      this.isEditing = false;
      this.showAlert('success', 'Saved', 'Personal details saved successfully.');
    })
  }

  showAlert(alertStatus: string, alertTitle: string, alertMessage: string): void {
    this.alertStatus = alertStatus;
    this.alertTitle = alertTitle;
    this.alertMessage = alertMessage;
    this.alertVisible = true;

    setTimeout(() => {
      this.hideAlert();
    }, 2000);
  }

  hideAlert(): void {
    this.resetAlert();
  }

  resetAlert(): void {
    this.alertStatus = '';
    this.alertTitle = '';
    this.alertMessage = '';
    this.alertVisible = false;
  }

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  handleLiveDemoChange(event: any) {
    this.modalVisible = event;
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.personalDetailsService.uploadPicture(formData).subscribe(
        (response) => {
          this.getPersonalDetails();
        },
        (error) => {
          alert(error.message);
        },
        () =>{
          this.modalVisible = false;
        }
      );

    }
  }

  onFileSelected($event: Event) {
    const target = event?.target as HTMLInputElement;
    const fileList: FileList | null = target.files;

    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }
}
