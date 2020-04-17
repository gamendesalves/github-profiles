import { SearchProfileService } from './service/seach.profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    SearchProfileComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SearchProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
