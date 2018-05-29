/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { TestBed, inject } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatService } from '../src/mat.service';
import { MatModule } from '../src/mat.module';

describe('MatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatModule]
    });
  });

  it(
    'should be created',
    inject([MatService], (service: MatService) => {
      expect(service).toBeTruthy();
    })
  );
});
