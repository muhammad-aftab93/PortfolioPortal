import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {
  AlertModule,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  ColDirective,
  FormControlDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  ModalModule,
  RowComponent,
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
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
    IconDirective,
    ReactiveFormsModule,
    FormFeedbackComponent,
    AlertModule,
    ModalModule
  ]
})
export class PortfolioModule {
}
