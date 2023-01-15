import { Component, OnInit } from '@angular/core';
import { JsondbInitialAccService } from '../services/jsondb-initial-acc.service';
import { IAccount } from '../services/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accountingAccounts: Array<IAccount[]>;

  constructor(private accService:JsondbInitialAccService) { 
    this.accountingAccounts = this.accService.getAllAccounts();
  }

  ngOnInit(): void {
    console.log(this.accountingAccounts[0]);
    console.log(this.accountingAccounts[1]);
    console.log(this.accountingAccounts[2]);
    console.log(this.accountingAccounts[3]);
    console.log(this.accountingAccounts[4]);
  }

}
