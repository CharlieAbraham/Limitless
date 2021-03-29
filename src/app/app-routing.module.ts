import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './base-layout/base-layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {MarketDataComponent} from './pages/market-data/market-data.component';
import {UsersComponent} from './pages/users/users.component';
import {CustomersComponent} from './pages/customers/customers.component';
import {TradesComponent} from './pages/trades/trades.component';
import {ExecutionsComponent} from './pages/executions/executions.component';
import {AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'market-data',
        component: MarketDataComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'admins',
        component: UsersComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'trades',
        component: TradesComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'trades/:id/details',
        component: ExecutionsComponent,
        canActivate: [AuthGuardService]
      },
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
