/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {FacetsDiveInfoCard} from './facets-dive-info-card';

const {expect} = chai;

describe('FacetsDiveInfoCard', () => {

  it('should appear in the test page', () => {
    const elem = document.querySelector('facets-dive-info-card');
    expect(elem instanceof Element).to.be.true;
  });

  it('should show selected data objects', (done) => {
    const elem =
        document.querySelector('facets-dive-info-card') as FacetsDiveInfoCard;

    const data = [{'exampleKey': 'exampleValue'}];
    elem.selectedData = data;

    expect(elem.textContent)
        .to.match(/exampleKey/)
        .and.to.match(/exampleValue/);
  });

});
