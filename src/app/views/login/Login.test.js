import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';

import { Login } from '../../components/screens';

describe('Login component', () => {
    // global render testing
    test('should shallow correctly', () => {
        expect(shallowWithIntl(<Login />)).toMatchSnapshot();
    });
});
