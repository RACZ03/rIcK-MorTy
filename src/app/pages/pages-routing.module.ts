import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from '@theme/app-layout/app-layout.component';
import { ROUTES } from '@app/theme';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { title: ROUTES.find(r => r.path === '/pages/dashboard')?.title },
      },
      {
        path: 'job-board', loadChildren: () => import('./job/job.module').then(m => m.JobModule),
        data: { title: ROUTES.find(r => r.path === '/pages/job-board')?.title },
      },
      {
        path: 'scheduler', loadChildren: () => import('./job/job.module').then(m => m.JobModule),
        data: { title: ROUTES.find(r => r.path === '/pages/scheduler')?.title },
      },
      {
        path: 'messenger', loadChildren: () => import('./job/job.module').then(m => m.JobModule),
        data: { title: ROUTES.find(r => r.path === '/pages/messenger')?.title },
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
