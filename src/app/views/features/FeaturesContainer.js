import { connect } from 'react-redux';
import { Features as FeaturesComponent } from '../../components/screens';

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
)(FeaturesComponent);
