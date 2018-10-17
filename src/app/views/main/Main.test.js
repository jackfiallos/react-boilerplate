import React from 'react';
import ReactDOM from 'react-dom';
// import { shallowWithIntl } from 'intl-helper';

import { Main } from '../../components/screens';

it('renders without crashing', () => {
    // const customMessage = shallowWithIntl(<CustomMessage />, { context: intl });
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
});
