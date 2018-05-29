import { Component, OnInit } from '@angular/core';

import { MatService } from 'pkgs/mat';

import { SvgIcons } from './app.icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Neekware';
  constructor(public mat: MatService) {
    this.title = '@nwx/mat';
    console.log('AppComponent loaded ...');
  }

  ngOnInit() {
    this.mat.loadSvgIconSet('/assets/svg/mdi/mdi.svg');
    this.mat.loadSvgIconsInNamespace(SvgIcons);
  }
}
