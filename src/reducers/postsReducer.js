const postsInitialState=[]
const postsReducer = (state = postsInitialState,action)=>{
    switch(action.payload){
        case 'SET_POSTS':{
            return[...action.payload]
        }
        default:{
            return[...state]
        }
    }

}
export default postsReducer