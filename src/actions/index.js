export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = `CLEAR_DISPLAY`
export const MEMORY_TOTAL = 'MEMORY_TOTAL'
export const MEMORY_PLUS_TOTAL = 'MEMORY_PLUS_TOTAL'
export const MEMORY_SET_ZERO = 'MEMORY_SET_ZERO'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const applyOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload: operation})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const memoryTotal = () => {
    return({type:MEMORY_TOTAL})
}

export const memoryPlusTotal = (number) => {
    return({type:MEMORY_PLUS_TOTAL, payload:number})
}

export const memorySetZero = () => {
    return({type:MEMORY_SET_ZERO})
}