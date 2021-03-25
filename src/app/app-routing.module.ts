import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './base-layout/base-layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {MarketDataComponent} from './pages/market-data/market-data.component';
import {UsersComponent} from './pages/users/users.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'market-data',
        component: MarketDataComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
