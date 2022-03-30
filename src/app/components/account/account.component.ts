import { Component, OnInit } from '@angular/core';
import { MainviewComponent } from '../mainview/mainview.component';
import { UserModel, ApiAccount } from '../../models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public userService:UserService, public mainviewComponent:MainviewComponent) { }

  userAccount?:ApiAccount;

  ngOnInit(): void {
    this.showAccountData();
  }

  public showAccountData(){
    this.userAccount = this.userService.userData?.apiAccount;
  }

}
