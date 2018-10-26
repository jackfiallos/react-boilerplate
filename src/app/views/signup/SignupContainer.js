import { connect } from 'react-redux';
import { Signup as SignupComponent } from '../../components/screens';

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
)(SignupComponent);
