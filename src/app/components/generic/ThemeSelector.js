import React from 'react';
import PropTypes from 'prop-types';

const ThemeSelect = props => (
    <select className="form-control" onChange={e => props.handleThemeChange(e)}>
        <option value="baseTheme">Base Theme</option>
        <option value="highContrast">High Contrast Theme</option>
    </select>
);

ThemeSelect.propTypes = {
    handleThemeChange: PropTypes.func,
};

ThemeSelect.defaultProps = {
    handleThemeChange: () => {},
};

export default ThemeSelect;
