
const initialData = {
    "book" : 10
}

const Reducer = (state=initialData,action) => {
    switch (action.type) {
        case 'Buy_book':
            return{
                ...state,
                "book" : state.book+1
            }        
        
        case 'Sell_book':
            return{
                ...state,
                "book" : state.book-1
            }

        default:
            return state;
    }
}

export default Reducer;