import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component'

@Injectable({
  providedIn: 'root'
})
export class DeviceViewService {

  constructor() { }

  appComponent: AppComponent

  mobileScreenSize:number = 760;
  currentScreenSize:number = 0;

  isMobile():boolean{
    this.currentScreenSize = document.documentElement.clientWidth;
    if(this.currentScreenSize > this.mobileScreenSize)
      //this.isMobileDevice = false;
      return false
    else{
      //this.isMobileDevice = true;
      return true
    }
  }
}
