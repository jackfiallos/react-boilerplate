import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';

import { Signup } from '../../components/screens';

describe('Signup component', () => {
    // global render testing
    test('should shallow correctly', () => {
        expect(shallowWithIntl(<Signup />)).toMatchSnapshot();
    });
});
