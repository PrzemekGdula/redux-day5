const SET = 'users/SET'

export const setUsersActionCreator = users => ({
    type: SET,
    users,
})

export default (state, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                users: action.users,
            }
        default:
            return state
    }
  }
  