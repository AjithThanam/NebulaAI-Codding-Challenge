import { Component, OnInit } from '@angular/core';
import {DeviceViewService} from './services/deviceView/device-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NebulaCodingChallenge';
  isMobileDevice: boolean = false;

  constructor(private deviceViewService: DeviceViewService) {}

  ngOnInit():void{
    this.isMobileDevice = this.deviceViewService.isMobile()
    window.onresize = () => {
      this.isMobileDevice = this.deviceViewService.isMobile()
    };
  }

  // isMobile(){
  //   this.currentScreenSize = document.documentElement.clientWidth;
  //   if(this.currentScreenSize > this.mobileScreenSize)
  //     this.isMobileDevice = false;
  //   else
  //     this.isMobileDevice = true;
  // }

}
