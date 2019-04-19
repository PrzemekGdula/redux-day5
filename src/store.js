import { createStore, combineReducers } from './redux'

import users, { setUsersActionCreator } from './state/users'
import events, { setEventsActionCreator } from './state/events'

const rootReducer = combineReducers => ({
        users: users,
        events: events,
    })

export const store = createStore(rootReducer)

store.dispatch({})
store.dispatch(setUsersActionCreator([]))
store.dispatch(setEventsActionCreator([]))

console.log(store.getState())
