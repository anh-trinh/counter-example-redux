import React from 'react'
import { render } from 'react-dom'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//Chỉ cần khai báo './reducers' nó sẽ tự biết lấy index.js trong folder reducers
import rootReducer from './reducers'



//Redux cung cấp hàm createStore để tạo kho lưu trữ
//Chúng ta đi tạo một cái reducer trước, rồi đưa nó vào trong createStore
const store = createStore(rootReducer)

//Chúng ta đặt toàn bộ chương trình vào trong thành phần Provider của react-redux, 
//và cung cấp cho nó thuộc tính là kho lưu trữ vừa tạo được.
const App = () => (
    <div>
        <Provider store={store}>
            <Counter/>
        </Provider>
    </div>
)

render(<App/>, document.getElementById('root'))