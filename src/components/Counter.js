import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterAction'

class Counter extends React.Component {

    //Các hành động được gửi đi thông qua một hàm tên là dispatch()
    //Hàm connect() ở dòng 52 giúp “âm thầm” đưa thêm hàm dispatch() vào props ở đây
    //Nhưng thay vì dùng dispatch() trực tiếp để truyền vào các actions trong component này như sau:
    increment = () => {
        this.props.dispatch({type: 'INCREMENT'})
    }
    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'})
    }
    //rồi sau đó gọi các hàm trên trong onClick={this.increment} hoặc onClick={this.decrement}
    //Thì chúng ta có thể tách actions ra một file và nối như bên dưới tại dòng 45

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.props.actions.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.props.actions.increment}>+</button>
                </div>
            </div>
        )
    }
}

//Chúng ta viết hàm mapStateToProps nhằm thu được phần dữ liệu mong muốn từ kho lưu trữ store của Redux.
const mapStateToProps = (state) => {
    return {
        //store được tạo ra trong index.js ngoài cùng đang chứa nhiều reducers
        //biến state ở đây chính là từ store
        //biến count được map ở đây chính là this.props.count của component này
        count: state.counterReducer.count
    }
}

//Chúng ta có thể dùng hàm bindActionCreators() để kết nối các actions dc viết trong counterActions.js
const mapDispatchToProps = (dispatch) => ({
    //biến actions là các actions của component này dc lấy dữ liệu từ counterActions lấy ở dòng số 4
    actions: bindActionCreators(counterActions, dispatch)
})

//Chúng ta kết nối kho lưu trữ Redux tới component Counter và kết nối actions của component Counter, thông qua hàm connect của react-redux.
export default connect(mapStateToProps, mapDispatchToProps)(Counter)