export const loginState = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};
