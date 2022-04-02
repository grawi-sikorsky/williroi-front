import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user-model';
import { Subscription } from 'rxjs';
import { Cgprice } from '../../models/cgprice';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  userModel?:UserModel = {};
  heliumPrice?:Cgprice = {};


  constructor(public userService:UserService) { }  

  ngOnInit(): void {
    this.userService.getUserData("kloc");
    this.userService.getPricesFromApi();

    this.userService.currentUserData.subscribe(data => {
      this.userModel = data;
    });
    
    this.userService.cg_price.subscribe( data =>{
      this.heliumPrice = data;
    });
  }

  public getUser(){ 
    this.userService.getUserData("kloc");
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

  public getCoinGeckoPrices(){
    this.userService.getPricesFromApi();    
  }

  public refreshAPIaccountRewards(){
    this.userService.refreshAPIaccountRewards("kloc").subscribe( e =>{
    })
  }

  public getCompeteHotspotsBarStyles(hotspot_reward24:number){
      // colors
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      // width
      let barWidth = (hotspot_reward24 / this.userModel!.acc_reward24!) * 100;

      console.warn(hotspot_reward24);
      console.warn(barWidth);

      const styles = {
        'background-color' : color,
        'width' : barWidth +'%'
      };


      return styles;
  }
}
