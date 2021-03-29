import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {Config} from '../../models/Config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router, private authService: AuthenticationService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  submitLogin() {
    //use the auth service to make login
    console.log(this.userPassword);
    console.log(this.userEmail);
    this.authService.login(this.userEmail, this.userPassword).subscribe(response => {
      console.log('response', response);
      this.toastr.success('Login successful', 'Success');
      Config.saveUserDetails(response);
      this.router.navigateByUrl('/dashboard');
    }, error => {
      console.log('error', error);
      this.toastr.error('Invalid Credentials', 'Success');
    });
  }

}
