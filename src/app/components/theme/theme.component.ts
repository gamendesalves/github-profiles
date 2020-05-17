import { Component, OnInit, Renderer2 } from '@angular/core';
import ThemeHelper from '../../helper/ThemeHelper';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  toggle: boolean;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    this.loadTheme();
  }

  loadTheme() {
    const themeHelper = new ThemeHelper(this.render);
    if (themeHelper.loadTheme() === 'blue') {
      themeHelper.themeBlue();
      this.toggle = true;
    } else {
      themeHelper.themeGreen();
      this.toggle = false;
    }
  }

  onToggle() {
    const themeHelper = new ThemeHelper(this.render);
    this.toggle = !this.toggle;
    if (!this.toggle) {
      themeHelper.themeGreen();
    } else {
      themeHelper.themeBlue();
    }
  }

}
