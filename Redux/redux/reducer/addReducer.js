const addReducer = (state = false , action)=>{
    if (action.type === 'ADD') return !state;
    return state;
}

export default addReducer;