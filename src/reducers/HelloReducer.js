const HelloReducer = (state, action) => {
    
  switch (action.type) {
      case 'add':
        let newstate = {text:state.text+action.onChange};
       return  newstate;

      case 'CHANGE_TEXT':
        return Object.assign({}, state, {text: action.text});
      default:
        return state;
    }
  }
  
  export default HelloReducer;