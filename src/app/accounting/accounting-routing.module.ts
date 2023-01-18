import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccJournalComponent } from './pages/acc-journal/acc-journal.component';
import { AccListComponent } from './pages/acc-list/acc-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'acc-list', component: AccListComponent},
      { path: 'acc-journal', component: AccJournalComponent},
      { path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
