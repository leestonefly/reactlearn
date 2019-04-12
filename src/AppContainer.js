import { connect } from 'react-redux';
import App from './App';


const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    add:()=>dispatch({type: 'add',onChange:'+1'})
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;