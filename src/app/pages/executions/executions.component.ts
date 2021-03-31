import { Component, OnInit } from '@angular/core';
import {TradeService} from '../../services/trade.service';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-executions',
  templateUrl: './executions.component.html',
  styleUrls: ['./executions.component.css']
})
export class ExecutionsComponent implements OnInit {

  executions: any = [];
  constructor(private tradeService: TradeService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }


  ngOnInit(): void {
    let orderId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('orderId', orderId);
    if (orderId !== 'null') {
      this.getExecutions(orderId);
    } else {
      this.toastr.error('There are no executions for this trade');
    }
  }

  getExecutions(orderId: any) {
    this.tradeService.executions(orderId).subscribe(response => {
      console.log('response', response);
      this.executions = response;
    }, error => {
      console.log(error);
    });
  }


}
