const SET = 'events/SET'

export const setEventsActionCreator = events => ({
    type: SET,
    events,
})

export default (state, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                events: action.events,
            }
        default:
            return state
    }
  }
  