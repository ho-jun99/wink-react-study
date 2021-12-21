import { ADD_COUNT, MINUS_COUNT } from "./types"

export const addCount = () => {
    return {
        type : ADD_COUNT
    }
}

export const minusCount = () => {
    return {
        type : MINUS_COUNT
    }

}