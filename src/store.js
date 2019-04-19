export const createStore = (rootReducer) => {

    let state = {}

    const getState = () => state

    const dispatch = (newAction) => {
        const newState = rootReducer(state, newAction)

        state = newState

        return newAction
    }

    const store = {
        getState,
        dispatch,
    }

    return store

}