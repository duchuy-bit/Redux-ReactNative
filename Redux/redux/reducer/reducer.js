import { createStore , combineReducers } from 'redux';

import arrWordReducer from './arrWordReducer';
import filterReducer from './filterReducer';
import addReducer from './addReducer';

const reducer = combineReducers({
    arrWords: arrWordReducer,
    filterStatus: filterReducer,
    isAdding: addReducer,
})
    
    // tao ra store
const store = createStore(reducer);

export default store;
//   tich hop vao trong ung dung react