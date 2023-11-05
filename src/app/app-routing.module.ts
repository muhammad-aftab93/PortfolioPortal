import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";
import {DefaultLayoutComponent} from "./containers";

const routes: Routes = [
  {path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./views/pages/pages.module').then((m) => m.PagesModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
