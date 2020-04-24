import React from 'react'
import {connect} from 'react-redux'
import {removeUserName} from '../actions/user'
 function UsersRemoveName(props){
     const handleRemove=(user)=>{
       const userName=prompt('are u sure?')
         if (userName===user.name){
           props.dispatch(removeUserName(userName))
       }else{
           alert ('invalid userName')
       }
     }
       return(
           <div>
               <table border='2'>
                   <thead>
                        <tr>id</tr>
                        <tr>name</tr>
                        <tr>email</tr>
                   </thead>
                   <tbody>
                       {
                         props.users.map(user=>{
                             return (<tr>
                                <td>{user.id}</td>
                                 <td>{user.name}</td>
                                 <td>{user.email}</td>
                                 <td><button onClick={()=>{
                                     handleRemove(user)
                                 }}></button></td>
                             </tr>)
                         }) 
                    }
                   </tbody>
               </table>
           </div>
       )
 }
 const mapStateToProps=(state)=>{
     return{
        users:state.users
     }
 }
export default connect(mapStateToProps)(UsersRemoveName)