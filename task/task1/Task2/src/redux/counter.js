

const counter=(state=0,action)=>{
    switch(action.type){
        case "in":
            return state+1
        case "de":
            return state-1
        default:
            return state
    }
}
export default counter;