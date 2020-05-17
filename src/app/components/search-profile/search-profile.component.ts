import { InfoRepository } from '../../model/InfoRepository';
import { Profile } from '../../model/Profile';
import { SearchProfileService } from '../../service/search.profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {

  pageTitle = 'GitHub Profiles';
  form: FormGroup;
  profile: Profile;
  infoRepos: InfoRepository[];
  errorRequest = '';
  loadProfile = false;

  constructor(private searchProfileService: SearchProfileService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required]
    });
  }

  onSubmit() {
    const username = this.form.get('username').value;

    this.searchProfileService.getInfoUsername(username)
      .subscribe(
        (responseUsername) => {

          this.searchProfileService.getInfoRepository(username).subscribe((responseRepository) => {

            this.profile = responseUsername;

            if (responseRepository.length >= 4) {
              responseRepository.sort((infoRepoA, infoRepoB) => {
                return infoRepoB.watchers - infoRepoA.watchers;
              });
              this.infoRepos = responseRepository;
            }

            this.loadProfile = true;

          });
        },
        error => this.errorRequest = error
      );
  }

  onKey(event: any) {
    // backspace
    if (event.keyCode === 8) {
      if (this.profile !== undefined) {
        Object.keys(this.profile).forEach(k => delete this.profile[k]);
      }
      this.infoRepos = [];
      this.loadProfile = false;
      this.errorRequest = '';
    }
  }

}
