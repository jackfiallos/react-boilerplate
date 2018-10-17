import {connect} from 'react-redux';
import { About as AboutComponent } from '../../components/screens';

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
)(AboutComponent);
