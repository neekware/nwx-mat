/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Injectable()
export class MatService {
  constructor(private sanitizer: DomSanitizer, private mdIconRegistry: MatIconRegistry) {}

  /**
   * Adds SVG icons within the privided namespace
   * @param iconList list of icons
   */
  loadSvgIconsWithNamespace(iconList) {
    // export const iconList = [
    //   {
    //     names: ['ad', 'AD'], // various alias
    //     namespace: 'flags',  // namespace
    //     path: 'assets/images/svg/flags/ad.svg' // path to icon
    //   },
    // ]

    iconList.forEach(icon => {
      const iconSecurePath = this.sanitizer.bypassSecurityTrustResourceUrl(icon.path);
      icon.names.forEach(name => {
        this.mdIconRegistry.addSvgIconInNamespace(icon.namespace, name, iconSecurePath);
      });
    });
  }

  /**
   *
   * @param iconPath path to icon set (ex: '/assets/fonts/mdi.svg')
   */
  loadSvgIconsSet(iconPath: string) {
    const mdiSecurePath = this.sanitizer.bypassSecurityTrustResourceUrl(iconPath);
    this.mdIconRegistry.addSvgIconSet(mdiSecurePath);
  }
}
