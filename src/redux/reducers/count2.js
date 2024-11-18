export const reducer2 = (state = {y : 0} , action) => {
    switch(action.type){
        case "ADDD":
            return{
                ...state,
                y: state.y + 1
            }
            case "REMOVE2":
                return{
                    ...state,
                    y: state.y - 1
                }
                default:
                    return state;
    }
}