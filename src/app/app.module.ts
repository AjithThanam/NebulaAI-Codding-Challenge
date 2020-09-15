import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { HttpClientModule } from '@angular/common/http';
import { HoverTableComponent } from './components/hover-table/hover-table.component';
import { StripedTableComponent } from './components/striped-table/striped-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainViewComponent,
    SidebarComponent,
    SimpleTableComponent,
    HoverTableComponent,
    StripedTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
