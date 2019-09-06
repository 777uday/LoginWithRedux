
export const incrementCount = (count)=>{
    return {
        type: 'increment_count',
        payload: count
    }
};

export const decrementCount = (count)=>{
    return {
        type: 'decrement_count',
        payload: count
    }
};

export const resetCount = (count)=>{
    return {
        type: 'reset_count',
        payload: 0
    }
};

export const loginUsername = (username, password)=>{
    // console.log('actions:'+username+password);
    return {
        type: 'login_username',
        payload: {username, password}
    }
};

export const loginPassword = (username, password)=>{
    // console.log('actions:'+username+password);
    return {
        type: 'login_password',
        payload: {username, password}
    }
};

export const loginCall = (username, password, navigation)=>{
    // console.log('actions:loginCall:',navigation);
    return {
        type: 'login',
        payload: { username, password, navigation }
    }
};

export const isLoading = (shouldLoad)=>{
    // console.log('actions:isLoading:'+shouldLoad);
    return {
        type: 'isLoading',
        payload : shouldLoad
    }
};