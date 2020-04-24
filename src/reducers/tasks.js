const tasksInitial=[
    {id:1,title:'db back',completed:true},
     { id: 2, title: 'server back', completed: false }
]
const tasksReducer = (state = tasksInitial,action)=>{
        switch(action.type){
            case 'ADD_TASK':{
                return [...state,action.payload]
            }
            case 'REMOVE_TASK':{
                return state.filter(task=>task.id != action.payload)
            }
            case 'TOGGLE_COMPLETE':{
                return state.map(task=>{
                    if(task.id==action.payload){
                        return {...task, completed:!task.completed}
                    }else{
                        return {...task}
                    }
                })
            }
        default:{
            return [...state]
        }
        }
}

export default tasksReducer