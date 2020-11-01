const initialState = {};

export const dashboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOAD_DASHBOARD_DATA':
      return action.payload;
    default:
      return state;
  }
};
