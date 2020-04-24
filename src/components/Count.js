import React from 'react'
//higher order component - A component (function) which takes another component (function) as an argument or returns a component (function) is called as a higher order component
import {connect} from 'react-redux'
import {increment} from '../actions/count'
import { decrement } from '../actions/count'

function Counter(props) {
  console.log(props);
return (
    <div>
        <h1>
            {props.count}
        </h1>
        <button onClick={()=>{
            props.dispatch(increment())
        }}>up</button>
    <button onClick={() => {
      props.dispatch(decrement())
    }}>down</button>
    </div>
)
    }  
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

//wrapped component
//const wrappedCoponent = connect(mapStateToProps)(Counter)
//export default wrappedCoponent

export default connect(mapStateToProps)(Counter);