import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthentication } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService,
    private basicAuth: BasicAuthentication
  ){

  }

  ngOnInit(): void {
      // this.hardcodedAuthenticationService.logout();
      this.basicAuth.logout();
  }

}
