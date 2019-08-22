const initialState = 0;
export default (state = initialState, action)=>{
    switch (action.type){
        case 'increment_count':{
            var newState = state + 1;
            return newState;
        }
        case 'decrement_count':{
            var newState = state - 1;
            return newState;
        }
        case 'reset_count':{
            var newState = 0;
            return newState;
        }
        default: 
            return state;
    }
    
}