
export default (state = false, action)=>{
    switch (action.type){
        case 'isLoading':{
            console.log("isLoading:reducer:"+JSON.stringify(action.payload));
            var newState = action.payload
            return newState ;
        }
        default: 
            console.log("reducers:default:"+JSON.stringify(state));
            return state;
    }
    
}