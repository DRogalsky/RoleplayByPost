import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';
import { GMdashComponent } from './gmdash/gmdash.component';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontPageComponent,
    GMdashComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
