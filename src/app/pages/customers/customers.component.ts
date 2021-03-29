import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: [] = [];

  constructor(private toastr: ToastrService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.customerService.customers().subscribe(response => {
      console.log(response);
      this.customers = response
    }, error => {
      console.log(error);
    });
  }

}
