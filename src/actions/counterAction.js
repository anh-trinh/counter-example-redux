//Một “action” là một đối tượng có vai trò mô tả một sự thay đổi mà chúng ta tạo ra
//Nó có một thuộc tính bắt buộc là type
export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}