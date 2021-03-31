import {Component, OnInit} from '@angular/core';
import {TradeService} from '../../services/trade.service';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  trades: any[] = [];
  customers: [] = [];

  constructor(private tradeService: TradeService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getTrades();
  }

  getTrades() {
    this.tradeService.trades().subscribe(response => {
      console.log(response);
      this.trades = response;
    }, error => {
      console.log(error);
    });
  }

  getUsers() {
    this.customerService.customers().subscribe(response => {
      console.log(response);
      if (response !== null) {
        this.customers = response;
      }
    }, error => {
      console.log(error);
    });
  }
}
