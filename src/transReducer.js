const TransactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION': {
            return [action.payload, ...state]
        }
        case 'DELETE_TRANSACTION':{
            return state.filter(transaction => transaction.indx !== action.payload)
        }
            




        default:
            return state;
    }
}

export default TransactionReducer;