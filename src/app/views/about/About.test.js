import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';

import { About } from '../../components/screens';

describe('Features component', () => {
    // global render testing
    test('should shallow correctly', () => {
        expect(shallowWithIntl(<About />)).toMatchSnapshot();
    });
});
