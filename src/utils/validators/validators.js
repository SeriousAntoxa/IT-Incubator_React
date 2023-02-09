export const requiredField = (value) => {
    if (value) return undefined

    return "This field if required"
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value !== undefined) {
        if (value.length < maxLength) {
            return undefined
        } else {
            return `Max length ${maxLength} symbols`
        }
    }
}
