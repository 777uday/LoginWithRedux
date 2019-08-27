
import Toast from 'react-native-simple-toast';
import {Keyboard} from 'react-native'
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
            Keyboard.dismiss();
            // console.log("reducers:login:"+JSON.stringify(action));
            var newState = action.payload
            if(newState.username == 'Uday' && newState.password == 'Uday'){
                return {
                    ...newState,
                    isLoading:false,
                    response:{
                        status:true,
                        message : 'Login Successful',
                        userInfo : {
                            name : 'Uday',
                            age : 24,
                            address : 'Kukatpally'
                        }
                    }
                }
            } else {
                if(!newState.username){
                    Toast.show('Please enter valid Username');
                } else if(!newState.password){
                    Toast.show('Please enter valid Password');
                } else {
                    Toast.show('Invalid Login Credentials');
                }
                return {
                    ...newState,
                    isLoading:false,
                    response:{
                        status:false,
                        message : 'Login failed',
                        userInfo : {}
                    }
                }
            }
        }
        default: 
        console.log("reducers:default:"+JSON.stringify(state));
            return state;
    }
    
}