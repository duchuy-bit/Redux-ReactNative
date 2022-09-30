const defaultArr = 
    [
        {id: 1, en: 'action', vn: "hanh dong", memorized: true, isShow: true},
        {id: 2, en: 'alo', vn: "alo", memorized: false, isShow: true},
        {id: 3, en: 'abc', vn: "abc", memorized: true, isShow: true},
        {id: 4, en: 'dfs', vn: "dfs", memorized: true, isShow: false},
        {id: 5, en: 'eg', vn: "eg", memorized: false, isShow: true},
        {id: 6, en: 'bb', vn: "bb", memorized: true, isShow: false},
        {id: 7, en: 'cc', vn: "cc", memorized: true, isShow: true},
        {id: 8, en: 'đd', vn: "đd", memorized: false, isShow: false},
        {id: 9, en: 'ggsd', vn: "ggsd", memorized: false, isShow: true},
        {id: 10, en: 'sngsf', vn: "sngsf", memorized: true, isShow: false},
        {id: 11, en: 'sngsf', vn: "sngsf", memorized: false, isShow: false},
        {id: 12, en: 'vagraa', vn: "vagraa", memorized: true, isShow: true},
    ];    


const arrWordReducer = (state = defaultArr,action)=>{
    if (action.type ==='TOGGLE_MEMORIZED') 
    return state.map(e=>{
            if (action.id === e.id) return {...e,memorized: !e.memorized}
            else return e;
        });
    
    if (action.type ==='SHOW') 
    return state.map(e=>{
        if (action.id === e.id) return {...e,isShow: !e.isShow}
        else return e;
    });   
    
    if (action.type === 'NEWVOCABULARY') 
    {
        addArr = [{id : state.length+1, en: action.en, vn: action.vn, memorized: false, isShow: true} ]
        return [addArr[0],...state];
    } 

    return state;
}

export default arrWordReducer;