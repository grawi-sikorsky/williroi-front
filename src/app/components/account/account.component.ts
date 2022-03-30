import { Component, OnInit } from '@angular/core';
import { MainviewComponent } from '../mainview/mainview.component';
import { UserModel, ApiAccount } from '../../models/user-model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public userService:UserService, public mainviewComponent:MainviewComponent) { }

  userModel:UserModel = {}; // binds with userService data on subscribe!

  ngOnInit(): void {
    this.userService.currentUserData.subscribe(data => {
      this.userModel = data;
    });
  }
}
