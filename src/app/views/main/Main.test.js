import React from 'react';
import { shallowWithIntl } from 'enzyme-react-intl';

import { Main } from '../../components/screens';

describe('Main component', () => {
    // global render testing
    test('should shallow correctly', () => {
        expect(shallowWithIntl(<Main />)).toMatchSnapshot();
    });
});
