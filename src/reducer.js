let initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':

    initialState = {
 
      ...initialState,
      good: initialState.good +1
    }
    
  
    console.log(initialState)

    state = initialState
    
      return state
    case 'OK':

    
      initialState = {
 
        ...initialState,
        ok: initialState.ok +1
      }
      
    
      console.log(initialState)
  
      state = initialState

      return state
    case 'BAD':
      
    initialState = {
 
      ...initialState,
      bad: initialState.bad +1
    }
    
  
    console.log(initialState)

    state = initialState

      return state
    case 'ZERO':

    
      initialState = {
        good: 0,
        ok: 0,
        bad: 0
      }
      
    
      console.log(initialState)
  
      state = initialState
      return state
    default: return state
  }
  
}

export default counterReducer