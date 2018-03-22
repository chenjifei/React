const InitialState = {
    detailCounter: 0,
    InitArr: [6, 5, 4, 3, 2, 1],
    currentIndex: 0
}
const detailReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case "DETAIL_ADD":
            return {
                ...state,
                detailCounter: state.detailCounter + action.detailCounter,
            }
        case "DETAIL_SUB":
            return {
                ...state,
                detailCounter: state.detailCounter - action.detailCounter,
            }
        case "DETAIL_NEXT_RANDOM":
            return {
                ...state,
                currentIndex: action.currentIndex

            }
        case "DETAIL_PREV_RANDOM":
            return {
                ...state,
                currentIndex: action.currentIndex
            }
        default:
            return state;
    }

}
export default detailReducer;