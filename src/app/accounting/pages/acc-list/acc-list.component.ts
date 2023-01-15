import { Component, OnInit } from '@angular/core';
import { JsondbInitialAccService } from 'src/app/services/jsondb-initial-acc.service';
import { IAccount } from 'src/app/services/models';

@Component({
  selector: 'app-acc-list',
  templateUrl: './acc-list.component.html',
  styleUrls: ['./acc-list.component.css']
})
export class AccListComponent implements OnInit {

  accountingAccounts: Array<IAccount[]>;

  constructor(private accService:JsondbInitialAccService) { 
    this.accountingAccounts = this.accService.getAllAccounts();
  }

  ngOnInit(): void {
  }

  getChildrenAccounts(id: number): IAccount[] {
    if (id == 122) return this.accountingAccounts[4].filter(e => e.AccountingAccount === id); //Estado de resultados
    return this.accountingAccounts[1].filter(e => e.AccountingAccount === id);
  }

  getChildrenAccounts2(id: number, order: number): IAccount[] {
    return this.accountingAccounts[order].filter(e => e.AccountingAccount === id);
  }

}
