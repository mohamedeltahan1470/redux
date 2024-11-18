
export const reducer = (state = {x : 0} , action) =>{
    switch(action.type){
        case "ADD":
            return{
                ...state,
                x: state.x + 1
            }
        case "REMOVE":
            return{
                ...state,
                x: state.x - 1
            }
        default:
            return state;
    }
}
