import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cgprice } from 'app/models/cgprice';
import { Hotspot, UserModel } from '../../models/user-model';
import { UserService } from '../../services/user.service';
import { HotspotdialogComponent } from '../hotspotdialog/hotspotdialog.component';

@Component({
  selector: 'app-hotspots',
  templateUrl: './hotspots.component.html',
  styleUrls: ['./hotspots.component.css']
})
export class HotspotsComponent implements OnInit {

  constructor(public userService:UserService, public hsdialog:MatDialog) { }

  userModel:UserModel = {}; // binds with userService data on subscribe!
  heliumPrice:Cgprice = {}; // prices from CoinGecko API

  ngOnInit(): void {
    this.userService.currentUserData.subscribe(data => {
      this.userModel = data;

      this.userService.cg_price.subscribe( data =>{
        this.heliumPrice = data;

        this.calculateROI();
      });
      this.calculateROI();
    });
    this.calculateROI();
  }

  public calculateROI(){
    this.userModel.hotspots!.forEach(hotspot => {
      hotspot.roi = hotspot.price! / (hotspot.rewards_24! * this.heliumPrice.helium?.usd!); // ROI
      hotspot.roi7d = hotspot.price! / (hotspot.rewards_7d! * this.heliumPrice.helium?.usd! / 7); // ROI [7d]

      hotspot.roi_days_left = (hotspot.price! - (hotspot.rewards_lifetime! * this.heliumPrice.helium?.usd!)) / (hotspot.rewards_24! * this.heliumPrice.helium?.usd!); // BREAK EVEN DAYS LEFT
      hotspot.roi_days_left7d = (hotspot.price! - (hotspot.rewards_lifetime! * this.heliumPrice.helium?.usd!)) / (hotspot.rewards_7d! * this.heliumPrice.helium?.usd! / 7 ); // BREAK EVEN DAYS LEFT [7d]

      hotspot.roi_percent_left = ((hotspot.rewards_lifetime! * this.heliumPrice.helium?.usd!) / hotspot.price!)*100; // % LEFT
    });
  }

  public hotspotDialog(hotspot:Hotspot): void {
    const dialogRef = this.hsdialog.open(HotspotdialogComponent, {width:"85%", height:"85%", data:{ hotspot:hotspot, prices:this.heliumPrice } });
    dialogRef.afterClosed().subscribe(data=>{
      console.log("Hotspot Dialog zamkniety");
    })
  }
}