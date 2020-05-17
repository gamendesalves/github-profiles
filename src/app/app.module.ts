import { SearchProfileService } from './services/search.profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeComponent } from './components/theme/theme.component';

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
