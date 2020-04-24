import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function PostList(props){
    return (
        <div>
            <h2>listing posts-{props.posts.length}</h2>
            <ul>
                {props.posts.map(post=>{
                    return (
                      <li key={post._id}>
                        <Link to={'/posts/${posts.id}'}>{post.title}</Link>
                      </li>
                    );

                })}
            </ul>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(PostList)