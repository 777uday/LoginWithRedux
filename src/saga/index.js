
export function* trial1() {
    // yield delay(1000)
    yield loginCall()
    yield getConsole('he')
    yield getConsole('hel')
    yield getConsole('hell')
    yield getConsole('hello')
}
function getConsole(msg){
    console.log(msg);
    return msg
}

function loginCall(){
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
        return responseJson
    }).catch((err)=>{
        console.log(`API error:${err}`);
        return err
    });
}