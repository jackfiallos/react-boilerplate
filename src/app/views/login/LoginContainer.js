import { connect } from 'react-redux';
import { Login as LoginComponent } from '../../components/screens';

// expose props
const mapStateToProps = () => {
    return {};
};

// expose methods
const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginComponent);
