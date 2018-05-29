/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { MatModule } from '../src/mat.module';

describe('MatModule', () => {
  let matModule: MatModule;

  beforeEach(() => {
    matModule = new MatModule();
  });

  it('should create an instance', () => {
    expect(matModule).toBeTruthy();
  });
});
