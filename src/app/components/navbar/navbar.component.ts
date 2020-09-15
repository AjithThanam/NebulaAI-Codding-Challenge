import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    document.getElementById('wrapper').classList.toggle('menuDisplayed')
    document.getElementById('navbar').classList.toggle('sidebarToggled')
    document.getElementById('toggleBtnSpacing').classList.toggle('sidebar-closed')
    document.getElementById('page-content-wrapper').classList.toggle('page-wrapper')
    document.getElementById('sidebar-short-title').classList.toggle('sidebar-title-swap')
    document.getElementById('sidebar-long-title').classList.toggle('sidebar-title-swap')

    if(document.getElementById('tableSubmenu').classList.contains('show')){
      document.getElementById('tableSubmenu').classList.toggle('show')
    }
  }

}
