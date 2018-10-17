import React from 'react';
import ReactDOM from 'react-dom';
import { Redux } from '../../components/screens';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Redux />, div);
    ReactDOM.unmountComponentAtNode(div);
});
