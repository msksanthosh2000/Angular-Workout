import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthentication } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  isUserLoggedIn :boolean = false;

    constructor(public hardcodedAuthentication: HardcodedAuthenticationService,
      public basicAuthService: BasicAuthentication
    ){

    }

    ngOnInit(): void {
      

    // this.isUserLoggedIn  = this.hardcodedAuthentication.isUserLoggedIn();   
    this.isUserLoggedIn = this.basicAuthService.isUserLoggedIn();
    }
}
