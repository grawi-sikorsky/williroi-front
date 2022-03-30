import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  userModel?:UserModel;

  constructor(public userService:UserService) { }  

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(){ 
    this.userService.getUserData("kloc").subscribe( incUser =>
      {
        this.userModel=incUser;
        this.userService.userData = incUser;
        console.log(incUser);
      }
    );
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
}
