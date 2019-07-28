//Tạo một file index.js trong folder reducers để chứa hết tất cả reducer
//và cung cấp ra cho các thành phần khác của application sử dụng
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counterReducer
});

export default rootReducer