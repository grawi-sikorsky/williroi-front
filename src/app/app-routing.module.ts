import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewComponent } from './components/mainview/mainview.component';
import { HotspotsComponent } from './components/hotspots/hotspots.component';

const routes: Routes = [
  { path: '', component: MainviewComponent },
  { path: 'abc', component: HotspotsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
