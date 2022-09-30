const filterReducer = (state = "SHOW_ALL",action)=>{
    if (action.type === 'FILTER_SHOW_ALL') return 'SHOW_ALL';
    if (action.type === 'FILTER_MEMORIZED') return 'MEMORIZED';
    if (action.type === 'FILTER_PRACTICE') return 'PRACTICE';

    return state;
}

export default filterReducer;