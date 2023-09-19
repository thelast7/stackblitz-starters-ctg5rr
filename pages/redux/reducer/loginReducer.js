const initialState = {
  isLoggedIn: false,
  loading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
