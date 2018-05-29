# @nwx/mat

**A simple material module wrapper for Angular applications**

[![status-image]][status-link]
[![version-image]][version-link]
[![coverage-image]][coverage-link]
[![download-image]][download-link]

# How to install

    npm i @nwx/mat |OR| yarn add @nwx/mat

# How to use

```typescript
import { Component, OnInit } from '@angular/core';
import { MatService } from '@nwx/mat';
import { SvgIcons } from './app.icons';

export const SvgFlagIcons = [
  {
    names: ['ca', 'CA'], // country iso & aliases
    namespace: 'flags', // prefix
    path: 'assets/svg/flags/ca.svg' // path to svg flag
  },
  {
    names: ['us', 'US'],
    namespace: 'flags',
    path: 'assets/svg/flags/us.svg'
  }
];

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
    this.mat.loadSvgIconsInNamespace(SvgFlagIcons);
  }
}
```

```html
<!-- material design modules -->
<mat-toolbar>@nwx/mat</mat-toolbar>

<h1> Welcome to {{ title }}!</h1>

<!-- icons without namespace -->
<mat-icon color="primary" svgIcon="github-face"></mat-icon> Github Repo

<!-- icons with namespace -->
<mat-icon color="primary" svgIcon="flags:ca"></mat-icon>
```

# Running the tests

To run the tests against the current environment:

    npm run ci:all

# License

Released under a ([MIT](https://github.com/neekware/nwx-mat/blob/master/LICENSE)) license.

# Version

X.Y.Z Version

    `MAJOR` version -- making incompatible API changes
    `MINOR` version -- adding functionality in a backwards-compatible manner
    `PATCH` version -- making backwards-compatible bug fixes

[status-image]: https://secure.travis-ci.org/neekware/nwx-mat.png?branch=master
[status-link]: http://travis-ci.org/neekware/nwx-mat?branch=master
[version-image]: https://img.shields.io/npm/v/@nwx/mat.svg
[version-link]: https://www.npmjs.com/package/@nwx/mat
[coverage-image]: https://coveralls.io/repos/neekware/nwx-mat/badge.svg
[coverage-link]: https://coveralls.io/r/neekware/nwx-mat
[download-image]: https://img.shields.io/npm/dm/@nwx/mat.svg
[download-link]: https://www.npmjs.com/package/@nwx/mat
