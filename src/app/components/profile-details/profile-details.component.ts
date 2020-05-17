import { InfoRepository } from '../../model/InfoRepository';
import { Profile } from '../../model/Profile';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() profile: Profile;

  @Input() infoRepository: InfoRepository[];

  constructor() { }

  ngOnInit(): void {
  }

}
