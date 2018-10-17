import {connect} from 'react-redux';
import { Login as LoginComponent } from '../../components/screens';

// expose props
const mapStateToProps = (state) => {
    return {};
};

// expose methods
const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);
