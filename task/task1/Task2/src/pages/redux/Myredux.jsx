import { useDispatch, useSelector } from "react-redux"
import { decre, incre } from "./actions"


const Myredux=()=>{
    const data=useSelector(state=> state.count)
    const dispatch=useDispatch()
    return (
        <div>
            <h1>redux sample</h1>
            <p>output{data}</p>
            <button onClick={()=>dispatch(incre())}>increment</button>
            <button onClick={()=>{dispatch(decre())}}>decrement</button>

        </div>
    )
}
export default Myredux