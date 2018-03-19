const initialState = {
    value: 1
}

const IndexReducer = (state = initialState, action) => {
    console.log(state, action, this);
    console.log("----------------------------");
    switch (action.type) {
        case "ADD":
            return {
                value: state.value + action.value
            }
        case "SUB":
            return {
                value: state.value - action.value
            }
        default:
            return state;
    }
}
export { IndexReducer }