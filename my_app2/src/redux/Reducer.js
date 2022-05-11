import Value from "../data/Value";
import { incremental } from "./Action";

export const ValueReducer =(state = Value, action)=>{

    console.log(action)
    console.log(state)
    switch(action.type)
    {
        case "increment":
        return {...state, 
            value: state.value+1
        }

        case "decrement":
            return {...state,
                value: state.value - action.payload
            }
        
            case false:
                return{
                    ...state,
                    toggle:!state.toggle
                }

        default:
            return state
    }
}