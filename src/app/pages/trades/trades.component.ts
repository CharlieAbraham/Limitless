import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  trades: any[] = [];

  constructor(private tradeService: TradeService) { }

  ngOnInit(): void {
  this.getTrades()
  }
 
  getTrades() {
  this.tradeService.trade().subscribe(response=>{
     console.log(response);
     this.trades = response
  },error =>{
    console.log(error)
  });
}
  
}
