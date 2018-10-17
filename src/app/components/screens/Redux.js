import React from 'react';
import { PostList } from '../../components/generic';

export default (props) => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h2>Redux State Manager</h2>
                <p>The data flow in one direction and start with user press "Fetch Posts"</p>
                <p>Internally its called props.fetchPosts() and dispatched the reducer call "REQUEST_POSTS" from redux.container.js</p>
                <p>Because saga is listening all reducer types, will intercept "REQUEST_POSTS" from sagas/index.js (watchPosts), will dispatch "REQUEST_POSTS" reducer and execute fetchPosts action</p>
                <p>fetchPosts from posts.actions.js has the logic to send SUCCESS or FAILURE signals</p>
                <hr />
                <button type="button" className="btn btn-success" onClick={(e) => props.fetchPosts(1)} >Fetch Posts</button>
                <PostList items={props.posts}/>
            </div>
        </React.Fragment>
    );
};
