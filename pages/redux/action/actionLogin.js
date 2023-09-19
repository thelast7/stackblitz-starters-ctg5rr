export const setLogin = (isLoggedIn) => {
  return {
    type: 'SET_LOGIN',
    payload: isLoggedIn,
  };
};

export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  };
};
