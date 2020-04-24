import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
//import { findPost } from '../selectors/postSelectors'


function PostShow(props){
    console.log(props)
    return (
        <div>
            {props.post?(
                <div>
                    <h2>{props.post.title}</h2>
                     <p>{props.post.body}</p>
                     <Link to='/posts'>back</Link>
                </div>
            ):(
                <p>Loading...</p>
            )
        }
        </div>
    )
}
// const mapStateToProps=(state,props)=>{
//     const id=props.match.params.id
//     return{
//       post:state.posts.find(post=>post.id===parseInt(id)),
//         post:findPost(state.posts,id)
//     }
// }
export default connect()(PostShow);