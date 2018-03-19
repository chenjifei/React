const add = (value) => {
    console.log(value)
    return {
        type: "ADD",
        value
    }
}
const sub = (value) => {
    console.log(value)
    return {
        type: "SUB",
        value
    }
}
export { add, sub }