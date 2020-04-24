const initialGenerate=''
const randomReducer = (state = initialGenerate,action)=>{

    switch(action.type){
        case 'RAND':{
            return state+action.payload
         
        }
        default:{
            return state
        }
    }
}
export default randomReducer