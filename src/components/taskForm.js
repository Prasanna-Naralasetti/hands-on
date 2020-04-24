import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions/task'

class TaskForm extends React.Component{
    constructor(){
        super()
        this.state = {
            title:''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            id:Number (new Date()),
            title:this.state.title,
            state:false
        }
        console.log(formData)
        this.props.dispatch(addTask(formData))//this.props.dispatch({type:'ADD_TASK',payload:formData})
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>Add Task</h2>
                <form onSubmit={this.handleSubmit}>
                    Title:<input type="text" value={this.state.title} name="title" onChange={this.handleChange}/><br/><br/>>
                    
                    <button>submit</button>

                </form>
            </div>
        )
    }
    
}

export default connect()(TaskForm)