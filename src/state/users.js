export default (state, action) => {
    switch (action.type) {
        case 'SET':
            return {
                ...state,
                users: action.users,
            }
        default:
            return state
    }
  }
  