import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Citas App';
  users: User[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get('http://localhost:5206/Api/Users')
      .subscribe((res) => {
        // console.log(res);
        this.users = res as User[];
      });
  }
}
