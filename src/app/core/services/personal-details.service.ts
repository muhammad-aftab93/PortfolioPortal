import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {url} from "../apis";

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

  constructor(private apiService: ApiService) {
  }

  getPersonalDetails() {
    return this.apiService.sendRequest(url.getPersonalDetails, 'get')
  }
}