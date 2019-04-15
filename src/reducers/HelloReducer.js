const HelloReducer = (state={text: 'n',n:'nihao'}, action) => {

  switch (action.type) {
      case 'add':
        let newstate = {n:state.n+state.text};
       return  newstate;
      case 'change':
      let newtext = {
        n:state.n,
        text:action.payload
      };
      return newtext;
      case 'CHANGE_TEXT':
        return Object.assign({}, state, {text: action.text});
      default:
        return state;
    }
  }
  
  export default HelloReducer;