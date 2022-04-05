import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { Cgprice } from '../models/cgprice';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  private userData = new Subject<UserModel>();
  currentUserData = this.userData.asObservable();
  updateUserData(data:UserModel) {
    this.userData.next(data);
  }

  private pricesData = new Subject<Cgprice>();
  cg_price = this.pricesData.asObservable();
  updatePriceData(data:Cgprice) {
    this.pricesData.next(data);
  }


  public getUserData(username:String)
  {
    return this.http.get<UserModel>( this.API_URL + "/user/" + username).subscribe( data => {
        this.updateUserData(data);
        console.warn(data);
      });
  }

  public refreshAPIhotspots(username:String){
    return this.http.get( this.API_URL + "/user/" + username + "/api/hotspots");
  }

  public refreshAPIaccount(username:String){
    return this.http.get( this.API_URL + "/user/" + username + "/api/account");
  }

  public getPricesFromApi(){
    return this.http.get<Cgprice>( "https://api.coingecko.com/api/v3/simple/price?ids=helium&vs_currencies=usd%2Cpln" ).subscribe( data =>{
      this.updatePriceData(data);
    })
  }

  public refreshAPIaccountRewards(username:String){
    return this.http.get( this.API_URL + "/user/" + username + "/api/accountrewards");
  }
}
