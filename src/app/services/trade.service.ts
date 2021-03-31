import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from '../models/Config';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private httpClient: HttpClient) {
  }

  trades(): Observable<any> {
    return this.httpClient.get(Config.apiUrl() + '/trade/all/0');
  }

  executions(orderId: string): Observable<any>{
    return this.httpClient.get(Config.apiUrl() + "/trade/execution/all/" + orderId)
  }

  marketData(): Observable<any> {
    return this.httpClient.get(Config.apiUrl() + '/trade/md');
  }
}
