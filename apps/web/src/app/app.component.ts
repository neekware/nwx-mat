import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatService } from 'pkgs/mat';

import { SvgIcons } from './app.icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  title = 'Neekware';
  constructor(public fb: FormBuilder, public mat: MatService) {
    this.title = '@nwx/mat';
    console.log('AppComponent loaded ...');
  }

  ngOnInit() {
    this.mat.loadSvgIconSet('/assets/svg/mdi/mdi.svg');
    this.mat.loadSvgIconsInNamespace(SvgIcons);
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    });
  }
}
