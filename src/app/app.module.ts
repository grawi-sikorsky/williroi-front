import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainviewComponent } from './components/mainview/mainview.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './components/account/account.component';
import { HotspotsComponent } from './components/hotspots/hotspots.component';
import { ActivityComponent } from './components/activity/activity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotspotdialogComponent } from './components/hotspotdialog/hotspotdialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainviewComponent,
    FooterComponent,
    AccountComponent,
    HotspotsComponent,
    ActivityComponent,
    HotspotdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
