const add = (detailCounter: any) => {
    return {
        type: "DETAIL_ADD",
        detailCounter
    }
}
const sub = (detailCounter: any) => {
    return {
        type: "DETAIL_SUB",
        detailCounter
    }
}
const prev = (currentIndex: any) => {
    return {
        type: "DETAIL_PREV_RANDOM",
        currentIndex
    }
}
const next = (currentIndex: any) => {
    return {
        type: "DETAIL_NEXT_RANDOM",
        currentIndex
    }
}

export { add, sub, prev, next }