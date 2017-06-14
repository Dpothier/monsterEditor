/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import MonsterStatblockComponent from 'components/monsterEditor/MonsterStatblockComponent.js';

describe('MonsterStatblockComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(MonsterStatblockComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('monsterstatblock-component');
  });
});
