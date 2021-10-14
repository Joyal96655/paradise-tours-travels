import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { title: 'Admin', breadcrumb: 'Admin' }
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: { title: 'User', breadcrumb: 'User' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
