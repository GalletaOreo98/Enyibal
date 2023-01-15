import { Component, OnInit } from '@angular/core';
import { JsondbInitialAccService } from '../services/jsondb-initial-acc.service';
import { IAccount } from '../services/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstOrderAccounts:IAccount[] | undefined;
  secondOrderAccounts:IAccount[] | undefined;
  thirdOrderAccounts:IAccount[] | undefined;
  fourthOrderAccounts:IAccount[] | undefined;
  fifthOrderAccounts:IAccount[] | undefined;

  constructor(private accService:JsondbInitialAccService) { 
    this.firstOrderAccounts = this.accService.getFirstOrderAccounts();
    this.secondOrderAccounts = this.accService.getSecondOrderAccounts();
    this.thirdOrderAccounts = this.accService.getExtraOrdersAccounts(this.secondOrderAccounts);
    this.fourthOrderAccounts = this.accService.getExtraOrdersAccounts(this.thirdOrderAccounts);
    this.fifthOrderAccounts = this.accService.getIncomeStatementAccounts();
  }

  ngOnInit(): void {
    console.log(this.firstOrderAccounts);
    console.log(this.secondOrderAccounts);
    console.log(this.thirdOrderAccounts);
    console.log(this.fourthOrderAccounts);
    console.log(this.fifthOrderAccounts);
  }

}
