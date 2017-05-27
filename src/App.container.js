import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from './App';
import * as Actions from './actions';

const mapStateToProps = state => {
  return {
    items: state.cart.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cartAction: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
