import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserModel, Hotspot } from '../../models/user-model';

@Component({
  selector: 'app-hotspotdialog',
  templateUrl: './hotspotdialog.component.html',
  styleUrls: ['./hotspotdialog.component.css']
})
export class HotspotdialogComponent implements OnInit {

  hotspot:Hotspot={};

  constructor(private userService:UserService, @Inject(MAT_DIALOG_DATA) data:UserModel ) {
    this.hotspot = data;
  }

  ngOnInit(): void {
  }

}
