import React from 'react';
import ReactDOM from 'react-dom';
import { Features } from '../../components/screens';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Features />, div);
    ReactDOM.unmountComponentAtNode(div);
});
