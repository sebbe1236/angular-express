import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  message: any;
  toggleBtn: boolean = false;

  toggle() {
    this.toggleBtn = !this.toggleBtn;
  }

  constructor(private apiSevice: ApiServiceService) {}

  getMessage() {
    this.apiSevice.getMessage().subscribe({
      next: (res) => {
        this.message = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('call completed');
      },
    });
  }

  ngOnInit() {
    this.getMessage();
  }
}
