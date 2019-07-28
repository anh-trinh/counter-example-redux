//Redux không biết gì về state của chương trình sẽ trông ra sao. 
//Công việc đó là giành cho bạn! Nó có thể là một đối tượng, 
//hay một con số, một chuỗi,.. bất kì thứ gì ta muốn. 
//Như vậy, chúng ta phải viết ra một hàm return là state. 
//Hàm này được gọi là reducer

//Vào lần đầu tiên Redux gọi reducer, nó sẽ truyền vào state giá trị undefined
//Nên đây là lúc thích hợp để thiết lập cho trạng thái một cái giá trị ban đầu
const initialState = {
    count: 0
}

//Reducer tạo ra với mục đích nhận vào trạng thái hiện tại và trả lại trạng thái mới.
export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        //Trạng thái phải được coi như không thể thay đổi — immutable
        //Bạn không được làm các thứ như state.count++
        //Thay vào đó thứ bạn nên làm là return { … }
        case 'INCREMENT':
            //Khi reducer nhật một hành động là { type: 'INCREMENT' }, giá trị của số đếm lên
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        //Chú ý luôn đặt câu lệnh return state của cuối hàm reducer. 
        //Bởi vì Redux có thể đưa vào reducer các hành động mà nó không biết là gì
        default:
            return state
    }
}