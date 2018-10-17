import React from 'react';

const PostList = (props) => {
    return (
        <ul className="list-group list-group-flush">
            {(props.items && props.items.length) ? props.items.map((item, i) => (
                <li key={i} className="list-group-item">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </li>)
            ) : null}
        </ul>
    );
};

export default PostList;
