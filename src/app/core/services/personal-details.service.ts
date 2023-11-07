import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {url} from "../apis";
import {HttpClient} from "@angular/common/http";
import {IPersonalDetails} from "../models/personal-details-interface";

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

  constructor(private apiService: ApiService,
              private httpClient: HttpClient) {
  }

  getPersonalDetails() {
    // return this.apiService.sendRequest(url.getPersonalDetails, 'get')
    return this.httpClient.get<IPersonalDetails>(url.personalDetails);
  }

  updatePersonalDetails(personalDetails: IPersonalDetails) {
    return this.httpClient.post<IPersonalDetails>(url.personalDetails, personalDetails);
  }
}
