let state = {}

const getState = () => state

const dispatch = (newAction) => {
  const newState = rootReducer(state, newAction)

  state = newState

  return newAction
}

const rootReducer = (state, action) => {
  return {
    users: []
  }
}

export const store = {
  getState,
  dispatch,
}