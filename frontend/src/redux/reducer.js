const initialState = {
    open: true
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_OPEN':
            return {
                ...state,
                open: !state.open
            };
        default:
            return state;
    }
}