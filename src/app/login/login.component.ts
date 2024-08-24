import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthentication } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username = 'user';
  password = '';
  errorMsg = 'Invalid Credentials';
  invalid = false;

  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private basicAuthentication: BasicAuthentication
  ) {}

  ngOnInit(): void {}

  // handleLogin() {
  //   // if (this.username == 'sandy' && this.password == 'sandy') {
  //   if (
  //     this.hardcodedAuthentication.authenticate(this.username, this.password)
  //   ) {
  //     this.router.navigate(['welcome', this.username]);
  //     this.invalid = false;
  //   } else {
  //     this.invalid = true;
  //   }
  //   console.log(this.username);
  // }

  handleBasicAuthLogin() {
    this.basicAuthentication
      .executeBasicAuthentication(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalid = false;
        },
        (error) => {
          console.log(error);
          this.invalid = true;
        }
      );
  }

  handleJwtAuthLogin() {
    this.basicAuthentication
      .executeJwtAuthentication(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalid = false;
        },
        (error) => {
          console.log(error);
          this.invalid = true;
        }
      );
  }
}
