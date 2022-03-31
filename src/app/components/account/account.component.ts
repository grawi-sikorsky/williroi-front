import { Component, OnInit } from '@angular/core';
import { MainviewComponent } from '../mainview/mainview.component';
import { UserModel, ApiAccount } from '../../models/user-model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Cgprice } from '../../models/cgprice';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public userService:UserService, public mainviewComponent:MainviewComponent) { }

  userModel:UserModel = {}; // binds with userService data on subscribe!
  heliumPrice:Cgprice = {}; // prices from CoinGecko API

  ngOnInit(): void {
    this.userService.currentUserData.subscribe(data => {
      this.userModel = data;
    });

    this.userService.cg_price.subscribe( data =>{
      this.heliumPrice = data;
      console.warn(this.heliumPrice);
    });
  }
}
