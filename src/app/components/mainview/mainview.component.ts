import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  public getUser(){ 
    this.userService.getUserData("kloc").subscribe( e=>
      {
        console.log(e);
        console.log("sdasdf");
      }
    );
  }
}
