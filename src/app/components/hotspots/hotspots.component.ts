import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-hotspots',
  templateUrl: './hotspots.component.html',
  styleUrls: ['./hotspots.component.css']
})
export class HotspotsComponent implements OnInit {

  constructor(public userService:UserService) { }

  userModel:UserModel = {}; // binds with userService data on subscribe!

  ngOnInit(): void {
    this.userService.currentUserData.subscribe(data => {
      this.userModel = data;
    });
  }
}