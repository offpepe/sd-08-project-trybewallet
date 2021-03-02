import { GET_CURRENCIES, SAVE_EXPENDITURE, DELETE_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isCurrency: 'BRL',
};

function reducerGetCurrencies(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
}

function reducerSaveExpenditure(state = initialState, action) {
  switch (action.type) {
  case SAVE_EXPENDITURE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenditure] };
  default:
    return state;
  }
}

function reducerDelete(state = initialState, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
  case DELETE_EXPENSE:
    return { ...state, expenses: action.expenses };
  default:
    return state;
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return reducerGetCurrencies(state, action);
  case SAVE_EXPENDITURE:
    return reducerSaveExpenditure(state, action);
  case DELETE_EXPENSE:
    return reducerDelete(state, action);
  default:
    return state;
  }
}

export default reducer;
