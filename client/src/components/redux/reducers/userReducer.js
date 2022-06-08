const INITIAL_STATE = {
    user: {
        userid: '',
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    },
    loggedIn: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                user: action.user,
                loggedIn: action.loggedIn
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: INITIAL_STATE.user,
                loggedIn: false
            };
        default:
            return state;
    }
};

export default userReducer;