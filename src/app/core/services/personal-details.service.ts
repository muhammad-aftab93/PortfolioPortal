import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {url} from "../apis";
import {HttpClient} from "@angular/common/http";
import {IPersonalDetails} from "../models/personal-details-interface";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

  userImage = new BehaviorSubject<string>('');

  constructor(private apiService: ApiService,
              private httpClient: HttpClient) {
  }

  getPersonalDetails() {
    return this.httpClient.get<IPersonalDetails>(url.personalDetails);
  }

  updatePersonalDetails(personalDetails: IPersonalDetails) {
    return this.httpClient.post<IPersonalDetails>(url.personalDetails, personalDetails);
  }

  uploadPicture(picture: FormData) {
    return this.httpClient.post<string>(url.userImage, picture);
  }

  getUserImage() {
    return this.userImage.asObservable();
  }

  setUserImage(image: string) {
    this.userImage.next(image);
  }
}
