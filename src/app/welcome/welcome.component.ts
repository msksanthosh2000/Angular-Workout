import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { error } from 'node:console';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  name = 'sa';
  welcomeMsgFromServer!: String;

  constructor(private route: ActivatedRoute,
     private welcomeService: WelcomeDataService) {

  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMsg() {
    this.welcomeService.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse()
    );
  }

  getWelcomeMsgWithPathVariable() {
    this.welcomeService.executeHelloWorldPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse()
    );
  }

  handleErrorResponse(): void {
    throw new Error('Method not implemented.');
  }

  handleSuccessfulResponse(response: any) {
    console.log(response)
    this.welcomeMsgFromServer = response.msg;
  }
}
