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