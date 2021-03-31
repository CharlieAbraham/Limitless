import {Component, OnInit} from '@angular/core';
import {TradeService} from 'src/app/services/trade.service';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  trades: any[] = [];
  filteredTrades: any[] = [];

  constructor(private tradeService: TradeService) {
  }

  ngOnInit(): void {
    this.getTrades();
  }

  getTrades() {
    this.tradeService.trades().subscribe(response => {
      console.log(response);
      this.trades = response;
      this.filteredTrades = response;
    }, error => {
      console.log(error);
    });
  }

  filterTrades(value: string = 'all') {
    if (value === 'all') {
      this.filteredTrades = this.trades;
    } else {
      this.filteredTrades = this.trades.filter(trade => trade['status']?.toLowerCase() === value.toLowerCase());
    }
  }

}
