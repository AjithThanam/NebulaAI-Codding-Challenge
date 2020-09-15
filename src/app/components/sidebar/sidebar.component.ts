import { Component, OnInit } from '@angular/core';
import {DeviceViewService} from '../../services/deviceView/device-view.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isMobileDevice: boolean = false;

  constructor(private deviceViewService: DeviceViewService) {}


  ngOnInit(): void {
    this.isMobileDevice = this.deviceViewService.isMobile()
    window.onresize = () => {
      this.isMobileDevice = this.deviceViewService.isMobile()
    };
  }

  clickChecker():void{
    console.log(document.getElementById('sidebar-wrapper').offsetWidth)
  }

  toggleSidebar(){
    
    if(document.getElementById('sidebar-wrapper').offsetWidth == 55) {
      document.getElementById('wrapper').classList.toggle('menuDisplayed')
      document.getElementById('navbar').classList.toggle('sidebarToggled')
      document.getElementById('toggleBtnSpacing').classList.toggle('sidebar-closed')
      document.getElementById('page-content-wrapper').classList.toggle('page-wrapper')
      document.getElementById('sidebar-short-title').classList.toggle('sidebar-title-swap')
      document.getElementById('sidebar-long-title').classList.toggle('sidebar-title-swap')
    }
  }
}
