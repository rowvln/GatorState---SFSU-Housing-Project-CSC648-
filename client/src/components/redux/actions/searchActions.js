export const updateSearch = (searchValue) => {
    return {
        type : 'SEARCH_INPUT',
        searchValue,
    };
};

export const finishedSearch = () => {
    return {
        type : 'SEARCH_FINISHED'
    };
};

export const submittedSearch = () => {
    return {
        type : 'SEARCH_SUBMITTED'
    };
};