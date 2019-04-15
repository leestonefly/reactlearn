import { connect } from 'react-redux';
import App from './App';


const mapStateToProps = (state) => {
  return {
    text: state.text,
    n:state.n
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {  
    add1:()=>dispatch({type: 'add'}),
    change:(db)=>dispatch({type:'change',payload:db})
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;