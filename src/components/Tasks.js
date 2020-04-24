import React from 'react'
import {connect} from 'react-redux'
import {removeTask,toggleComplete} from '../actions/task'
import TaskForm from './taskForm'

function Tasks(props){
    const handleRemove = (id)=>{
        props.dispatch(removeTask(id))
    }
    const handleCheck=(id)=>{
        props.dispatch(toggleComplete(id))

    }
    return(
        <div>
<h2>Listing Tasks-{props.tasks.length}</h2>
<table>
    <thead>
        <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>remove</th>
        </tr>
    </thead>
    <tbody align = "centre">{
        props.tasks.map(task=>{
            return <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>
                    <input type="checkbox" checked={task.completed} onChange={()=>{
                        handleCheck(task.id)
                    }}/>

                </td>
                <td><button onClick={()=>{
                    handleRemove(task.id)
                }}>remove</button></td>
            </tr>
        })
    }

    </tbody>
</table>
<TaskForm/>
        </div>
    )
}
const mapStateToProps =(state)=>{
  return{
        tasks:state.tasks
  }
}
export default connect(mapStateToProps)(Tasks)