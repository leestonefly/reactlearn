export const HelloAction = (newText) => {
    
    return {
      type: 'CHANGE_TEXT',
      text: newText
    }
  }
  
  export default HelloAction;