import { Component, OnInit } from '@angular/core';
import {Config} from '../../models/Config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = ""
  email: string = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = Config.getName();
    this.email = Config.getEmail();
  }


  logout() {
    Config.clear();
    this.router.navigateByUrl("/login")
  }

}
