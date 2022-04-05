import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel, HotspotDTO, Hotspot } from '../../models/user-model';
import { Cgprice } from 'src/app/models/cgprice';
import { MatDialog } from '@angular/material/dialog';
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

      hotspot.roi_days_left = (hotspot.price! - (hotspot.rewards_lifetime! * this.heliumPrice.helium?.usd!)) / (hotspot.rewards_24! * this.heliumPrice.helium?.usd!); // BREAK EVEN DAYS LEFT

      hotspot.roi_percent_left = ((hotspot.rewards_lifetime! * this.heliumPrice.helium?.usd!) / hotspot.price!)*100; // % LEFT
    });
  }

  public hotspotDialog(hotspot:Hotspot): void {
    const dialogRef = this.hsdialog.open(HotspotdialogComponent, {width:"950px", data: hotspot});
    dialogRef.afterClosed().subscribe(data=>{
      console.log("Hotspot Dialog zamkniety");
    })
  }
}