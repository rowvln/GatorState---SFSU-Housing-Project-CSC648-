const INITIAL_STATE = {
    searchValue: '',
    zipCode: '',
    address: '',
    state: '',
    homeType: '',
    searchState: 'INITIAL',
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_INPUT':
            return {
                ...state,
                searchValue: action.searchValue,
                searchState: 'SEARCH_INPUT'
            };
        case 'SEARCH_FINISHED':
            return {
                ...state,
                searchState: 'SEARCH_FINISHED'
            };
        case 'SEARCH_SUBMITTED':
            return {
                ...state,
                searchState: 'SEARCH_SUBMITTED'
            };
        default:
            return state;
    }
};

export default searchReducer;