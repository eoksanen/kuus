const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':

    const goodToChange = state
    const changedGood = {
 
      ...goodToChange,
      good: goodToChange.good +1
    }
    
  
    console.log(changedGood)

    state = changedGood
    
      return state
    case 'OK':

    
      const okToChange = state
      const changedOk = {
   
        ...okToChange,
        ok: okToChange.ok +1
      }
      
    
      console.log(changedOk)
  
      state = changedOk

      return state
    case 'BAD':
      
      const badToChange = state
      const changedBad = {
   
        ...badToChange,
        bad: badToChange.bad +1
      }
      
    
      console.log(changedBad)
  
      state = changedBad

      return state
    case 'ZERO':
  
       
    
      console.log(initialState)
  
      state = initialState
      return state
    default: return state
  }
  
}

export default counterReducer