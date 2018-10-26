import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';

import { Redux } from '../../components/screens';

describe('Redux component', () => {
    // global render testing
    test('should shallow correctly', () => {
        expect(shallowWithIntl(<Redux />)).toMatchSnapshot();
    });
});
