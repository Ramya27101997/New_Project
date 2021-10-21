import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';

export const allAppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'orderPage', component: OrderComponent},
];