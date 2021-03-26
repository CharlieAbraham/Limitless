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

  userEmail: string = ''
  userPassword: string = ''

  constructor(private router: Router, private authService: AuthenticationService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    //todo: 1. protect routes
    //todo: 2. store details to storage
    //todo: 3. handle browser reload issues
  }

  gotoDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  submitLogin() {
    this.toastr.success("Login successful", "Success")
    //use the auth service to make login
    console.log(this.userPassword)
    console.log(this.userEmail)
    let data =  {
      "id": 1,
      "username": this.userEmail,
      "email": this.userEmail,
      "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrbm9ja3N0bzFAZ21haWwuY29tIiwiZXhwIjoxNzAzMTQyMjYyLCJpYXQiOjE2MTY3NDIyNjJ9.yUNMxO68QyH3shPWzQViF3X2M_LWK0_1_HDl-zSNoaRyH4Oz-lEzadiTekwdvvpSF7thWfpf2Oa_UyP1ZpDeow"
    }

    Config.saveUserDetails(data);
    this.router.navigateByUrl("/dashboard")

    // this.authService.login(this.userEmail, this.userPassword).subscribe(response => {
    //   console.log("response", response)
    // let data =  {
    //     "id": 1,
    //     "username": "knocksto1@gmail.com",
    //     "email": "knocksto1@gmail.com",
    //     "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrbm9ja3N0bzFAZ21haWwuY29tIiwiZXhwIjoxNzAzMTQyMjYyLCJpYXQiOjE2MTY3NDIyNjJ9.yUNMxO68QyH3shPWzQViF3X2M_LWK0_1_HDl-zSNoaRyH4Oz-lEzadiTekwdvvpSF7thWfpf2Oa_UyP1ZpDeow"
    //   }
    //
    //   Config.saveUserDetails(response);
    //
    //   //todo: redirect to dashboard
    // }, error => {
    //   console.log("error", error)
    // })
  }

}
