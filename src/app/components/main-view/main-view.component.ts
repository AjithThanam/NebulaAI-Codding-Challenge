import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  currentPageNum:number;

  ngOnInit(): void {
    this.currentPageNum = 1;
  }
  
  pageNavigation(btnValue:number):void{
    if(btnValue < 0 && this.currentPageNum != 1)
      this.currentPageNum--;
    else if (btnValue == 4 && this.currentPageNum != 3)
      this.currentPageNum++;
    else if (btnValue > 0 && btnValue != 4 )
      this.currentPageNum = btnValue;
  }
}
