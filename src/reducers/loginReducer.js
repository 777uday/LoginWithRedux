
import Toast from 'react-native-simple-toast';
import {Keyboard} from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
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
            // console.log("reducers:login:navigation:"+JSON.stringify(action));
            var newState = action.payload
            if( true ){
            // if(newState.username && newState.password ){
                fetch('https://api-in.kiiapps.com/api/apps/lro00pyiu0dr/server-code/versions/current/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json',
                        'X-Kii-AppID':'lro00pyiu0dr',
                        'X-Kii-AppKey':'fad237914abf44ba83894e774489443e'
                    },
                    body: JSON.stringify({
                        // userMail: newState.username,
                        // userPassword: newState.password,
                        userMail: 'kii.accelerators.test+technician@gmail.com',
                        userPassword: '1234',
                        isItAppSide: true
                    })
                })
                .then((response)=> response.json()).then((responseJson)=>{
                    console.log("API : ResponseJson:"+JSON.stringify(responseJson));
                    if(responseJson.returnedValue.status){
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'home' })],
                          });
                          newState.navigation.dispatch(resetAction);
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
                        Toast.show('Invalid Login Credentials');
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
                }).catch((err)=>{
                    console.log(`API error:${err}`);
                    return {
                        ...newState,
                        isLoading:false,
                        response:{
                            status:false,
                            message : 'Login failed',
                            userInfo : {}
                        }
                    }
                });
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