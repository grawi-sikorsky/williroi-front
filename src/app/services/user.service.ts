import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  public getUserData(username:String)
  {
    return this.http.get<UserModel>( this.API_URL + "/user/" + username);
  }
}
