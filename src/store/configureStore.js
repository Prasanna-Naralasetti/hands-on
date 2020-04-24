import {createStore,combineReducers,applyMiddleware}from 'redux'
import countReducer from '../reducers/count'
import randomReducer from '../reducers/generate'
import usersReducer from '../reducers/user'
import postsReducer from '../reducers/postsReducer'
import tasksReducer from '../reducers/tasks'
import thunk from 'redux-thunk'

const configureStore=()=>{
     const store = createStore(
       combineReducers({
         count: countReducer,
         random: randomReducer,
         users: usersReducer,
         tasks: tasksReducer,
         posts: postsReducer
       }),applyMiddleware(thunk)
     );
     return store
}
export default configureStore