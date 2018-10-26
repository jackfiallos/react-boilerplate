import { connect } from 'react-redux';
import { Redux as ReduxComponent } from '../../components/screens';
import { REQUEST_POSTS } from '../../ducks/constants';

// expose props
const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
    };
};

// expose methods
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: uid =>
            dispatch({
                type: REQUEST_POSTS,
                payload: {
                    userId: uid,
                },
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ReduxComponent);
