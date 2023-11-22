import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Citas App';
  users: User[] = [];

  constructor(private httpClient: HttpClient, private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(): void {
    const userString = localStorage.getItem("user");
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
