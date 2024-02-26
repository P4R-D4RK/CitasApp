import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMember } from '../models/member.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<IMember[]>(this.baseUrl + "users");
  }

  getMember(username: string) {
    console.log(username);
    this.http.get<IMember>(this.baseUrl + "users/" + username).subscribe(resp => console.log(resp));
    return this.http.get<IMember>(this.baseUrl + "users/" + username);
  }
}
