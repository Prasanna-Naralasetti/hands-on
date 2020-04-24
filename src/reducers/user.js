const inistialUserName=[
    {id:1,name:'prasanna',email:'prassu@gmail.com'},
    { id: 1, name: 'sathis', email: 'sathi@gmail.com' },
    { id: 1, name: 'cutie', email: 'cutie@gmail.com' },
    { id: 1, name: 'sweety', email: 'sweety@gmail.com' }
]
const usersReducer = (state = inistialUserName,action)=>{
    switch(action.type){
        case 'REMOVE_USER':{
            return state.filter(ele=>ele.id!=action.payload)
        }
       default:{
           return state
       }
    }
}
export default usersReducer