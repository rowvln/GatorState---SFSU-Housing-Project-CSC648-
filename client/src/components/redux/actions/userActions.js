export const loginUser = (user, loggedIn) => {
    return {
        type : 'LOG_IN',
        user,
        loggedIn
    };
};

export const logoutUser = () =>  {
    return {
        type : 'LOG_OUT'
    };
}