import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user-model';
import { Cgprice } from 'src/app/models/cgprice';

@Component({
  selector: 'app-hotspots',
  templateUrl: './hotspots.component.html',
  styleUrls: ['./hotspots.component.css']
})
export class HotspotsComponent implements OnInit {

  constructor(public userService:UserService) { }

  userModel:UserModel = {}; // binds with userService data on subscribe!
  heliumPrice:Cgprice = {}; // prices from CoinGecko API

  ngOnInit(): void {
    this.userService.currentUserData.subscribe(data => {
      this.userModel = data;
      this.calculateROI();
    });
    
    this.userService.cg_price.subscribe( data =>{
      this.heliumPrice = data;
      console.warn(this.heliumPrice);
    });

    
  }

  public calculateROI(){
    this.userModel.hotspots!.forEach(hotspot => {
      hotspot.roi = hotspot.price! / (hotspot.rewards_24! * this.heliumPrice.helium?.usd!); // ROI

      hotspot.roi_days_left = (hotspot.price! - (hotspot.rewards_lifetime! * this.heliumPrice.helium?.usd!)) / (hotspot.rewards_24! * this.heliumPrice.helium?.usd!); // BREAK EVEN DAYS LEFT

      hotspot.roi_percent_left = ((hotspot.rewards_lifetime! * this.heliumPrice.helium?.usd!) / hotspot.price!)*100; // % LEFT
    });
  }
}