import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

const TableView = ({ data }) => {
    const headers = data.map(set => (
        <th scope="col" key={uuidv4()}>
            {set.label}
        </th>
    ));

    const rows = (
        <tr key={uuidv4()}>
            <th scope="row" key={uuidv4()}>
                -
            </th>
            {data.map(set => (
                <td key={uuidv4()}>{set.value}</td>
            ))}
        </tr>
    );

    return (
        <table className="table">
            <thead>
                <tr>
                    <th key={uuidv4()}>Labels</th>
                    {headers}
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

TableView.propTypes = {
    data: PropTypes.array,
};

TableView.defaultProps = {
    data: [],
};

export default TableView;
