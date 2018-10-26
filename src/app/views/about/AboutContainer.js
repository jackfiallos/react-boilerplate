import { connect } from 'react-redux';
import { About as AboutComponent } from '../../components/screens';

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
)(AboutComponent);
