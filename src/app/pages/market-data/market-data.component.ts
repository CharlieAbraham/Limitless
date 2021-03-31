import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {TradeService} from '../../services/trade.service';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {


  marketData:[] = [];

  constructor(private toastr: ToastrService, private tradeService: TradeService) {
  }

  ngOnInit(): void {
    this.getMarketData()
  }

  getMarketData(){
    this.tradeService.marketData().subscribe(response=> {
      console.log(response);
      this.marketData = response
    }, error => {
      console.log(error)
    });
  }


}
