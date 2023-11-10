import { Component, OnInit } from '@angular/core';
import {LoadingService} from "../core/services/loading.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(public loadingService: LoadingService){
  }

  ngOnInit(): void {
  }

}
