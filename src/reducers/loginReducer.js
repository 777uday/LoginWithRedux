
const initialState = {
    username:'',
    password:''
};
export default (state = initialState, action)=>{
    switch (action.type){
        case 'login_username':{
            // console.log("reducers:username:"+JSON.stringify(action));
            var newState = {
                username : action.payload.username,
                password : action.payload.password
            };
            return newState ;
        }
        case 'login_password':{
            // console.log("reducers:password:"+JSON.stringify(state));
            var newState = {
                username : action.payload.username,
                password : action.payload.password
            };
            return newState;
        }
        case 'login':{
            // console.log("reducers:login:"+JSON.stringify(action));
            var newState = action.payload
            return newState;
        }
        default: 
        console.log("reducers:default:"+JSON.stringify(state));
            return state;
    }
    
}