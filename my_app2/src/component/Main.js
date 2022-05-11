import Counter from "./Counter";
import { connect } from "react-redux";

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        value:state,
        
    }
}


 const Main= connect(mapStateToProps)(Counter)

 export default Main;