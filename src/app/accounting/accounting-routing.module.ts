import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccListComponent } from './pages/acc-list/acc-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'acc-list', component: AccListComponent},
      { path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
