import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResumeRoutingModule} from './resume-routing.module';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  ColDirective,
  FormControlDirective,
  FormLabelDirective,
  RowComponent
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";


@NgModule({
  declarations: [
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    FormLabelDirective,
    RowComponent,
    ColComponent,
    ColDirective,
    FormControlDirective,
    IconDirective
  ]
})
export class ResumeModule {
}
