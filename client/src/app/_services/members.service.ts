import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  
  constructor(private http:HttpClient) { }

  getMembers():any{
    var temp = this.http.get<Member[]>(this.baseUrl+"users");
    return temp;
  }

  getMember(username:string){
    return this.http.get<Member>(this.baseUrl+"users/"+username)
  }

}
