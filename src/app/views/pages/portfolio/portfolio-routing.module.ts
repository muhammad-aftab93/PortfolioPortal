import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonalDetailsComponent} from "./personal-details/personal-details.component";

const routes: Routes = [
  {
    path: 'personal-details',
    component: PersonalDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
