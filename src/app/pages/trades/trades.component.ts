import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  constructor(private tradeService:TradeService) { }

  ngOnInit(): void {
  this.getTrades()
  }
 
  getTrades() {
  this.tradeService.getTrades().subscribe(response=>{
     console.log(response);
  },error =>{
    console.log(error)
  }
  )
   

  }
  
}
