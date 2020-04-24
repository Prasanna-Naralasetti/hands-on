import React from 'react'
import {connect} from 'react-redux'
import {rand} from '../actions/generate'

function Generate(props){
        return(
            <div>
                <h1>{props.random}</h1>
                <button onClick={()=>{
                    const rn= (Math.round(Math.random()*100))
                    props.dispatch(rand(rn))
                }}>Generator</button>
            </div>

        )
}
const mapStateToProps=(state)=>{
    return{
        random:state.random
    }

}
export default connect(mapStateToProps)(Generate)