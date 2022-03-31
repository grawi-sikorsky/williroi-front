import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  userModel?:UserModel = {};

  constructor(public userService:UserService) { }  

  ngOnInit(): void {
    this.userService.getUserData("kloc");
    this.userService.getPricesFromApi();
  }

  public getUser(){ 
    this.userService.getUserData("kloc");
  }

  public refreshAPIhotspots(){
    this.userService.refreshAPIhotspots("kloc").subscribe( e =>
      {
        console.log(e);
      }
    );
  }

  public refreshAPIaccount(){
    this.userService.refreshAPIaccount("kloc").subscribe( e =>
      {
        console.log(e);
      }
    );
  }

  public getCoinGeckoPrices(){
    this.userService.getPricesFromApi();    
  }
}
