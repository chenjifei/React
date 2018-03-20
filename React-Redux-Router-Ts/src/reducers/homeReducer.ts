const InitialState = {
    homeCounter: 0,
    InitArr: [1, 2, 3, 4, 5, 6],
    currentIndex: 0
}
const homeReducer = (state = InitialState, action: any) => {
     console.log(state, action);
    switch (action.type) {
        case "HOME_ADD":
            return {
                ...state,
                homeCounter: state.homeCounter + action.homeCounter,
            }
        case "HOME_SUB":
            return {
                ...state,
                homeCounter: state.homeCounter - action.homeCounter,
            }
        case "HOME_NEXT_RANDOM":
            return {
                ...state,
                currentIndex: action.currentIndex

            }
        case "HOME_PREV_RANDOM":
            return {
                ...state,
                currentIndex: action.currentIndex
            }
        default:
            return state;
    }

}

export default homeReducer;