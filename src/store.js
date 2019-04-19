import { createStore } from './redux'

import users, {setUsersActionCreator} from './state/users'

const rootReducer = users

const store = createStore(rootReducer)
  
  store.dispatch({})
  store.dispatch(setUsersActionCreator([]))
  
  console.log(store.getState())
  