import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Counter from './components/Count'
import Generate from './components/Generator'
import UsersRemoveName from './components/User'
import Tasks from './components/Tasks'
import PostList from './components/Posts'
import PostShow from './components/PostsShow'
import {connect} from 'react-redux'
function App(props) {
  return (
    <BrowserRouter>
    <div>
        <Link to="/posts">post</Link>
        <Route path="/posts" component={PostList} exact={true}/>
        <Route path="/posts/:id" component={PostShow}/>
        <h1>Redux App</h1>
              
     
      <PostList/>
        <PostShow />
        <h1>count value - {props.count}</h1>
 <Counter/>
  <Generate/>
  <UsersRemoveName/>
   <Tasks />
   

    </div>
    </BrowserRouter >
  )
}
const mapStateToProps = (state)=>{
  return{
    count:state.count,
    random:state.random,
    users:state.users,
    tasks:state.tasks,
    posts:state.posts

  }
}

//const wrappedComponent = connect(mapStateToProps)(App)
//export default wrappedComponent
export default connect(mapStateToProps)(App);
