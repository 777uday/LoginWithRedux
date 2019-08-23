
const initialState = {
    username:'',
    password:''
};
export default (state = initialState, action)=>{
    switch (action.type){
        case 'login_username':{
            console.log("reducers:username:"+JSON.stringify(action));
            var newState = {
                username:action.payload
            };
            return newState ;
        }
        case 'password':{
            console.log("reducers:password:"+JSON.stringify(state));
            var newState = state.payload;
            return newState;
        }
        default: 
        console.log("reducers:default:"+JSON.stringify(state));
            return state;
    }
    
}