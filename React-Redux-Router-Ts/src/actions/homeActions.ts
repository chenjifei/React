const add = (homeCounter: any) => {
    return {
        type: "HOME_ADD",
        homeCounter
    }
}
const sub = (homeCounter: any) => {
    return {
        type: "HOME_SUB",
        homeCounter
    }
}
const prev = (currentIndex: any) => {
    return {
        type: "HOME_PREV_RANDOM",
        currentIndex
    }
}
const next = (currentIndex: any) => {
    return {
        type: "HOME_NEXT_RANDOM",
        currentIndex
    }
}

export { add, sub, prev, next }