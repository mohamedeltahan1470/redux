import { ADD, REMOVE } from "../actions/actions"

export const add = () => {
    return{
        type: ADD,
    }
}
export const remove = () => {
    return{
        type: REMOVE,
    }
}