const inititalState = true;

export const authUser = (state = inititalState, action: any) => {
  switch (action.type) {
    case 'AUTH_LOGGED':
      return action.payload;
    default:
      return state;
  }
};
