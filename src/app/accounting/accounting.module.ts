import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingRoutingModule } from './accounting-routing.module';
import { AccListComponent } from './pages/acc-list/acc-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AccListComponent,
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    NgbModule
  ]
})
export class AccountingModule { }
