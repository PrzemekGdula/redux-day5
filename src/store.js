import { createStore } from './redux'

import users from './state/users'

const rootReducer = users

const store = createStore(rootReducer)
  
  store.dispatch({})
  store.dispatch({
    type: 'SET',
    users: [],
  })
  
  console.log(store.getState())
  