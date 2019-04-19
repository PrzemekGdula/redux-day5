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

export const combineReducers = (reducersObj) =>{
    return(state, action) => {
        return(
            Object.entries(reducersObj)
            .reduce(
                (r, [reducerName, reducer])=>({
                    ...r,
                    [reducerName]:reducer(state[reducerName], action)
                }),
                {}
                
            )
        )
    }
}