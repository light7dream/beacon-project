import {
  TYPE_SAVE_LOGIN_DETAILS,
} from "../actions/User";

const initialState = {
  // LOGIN DETAILS
  isLoginRemembered: false,
  arrayCMSData: [],
  arrayLanguages: [],
  userData: {},
  alertData: {},
  activeStatus: false,
  countryData: [],
  appVersion: {},
  updatePrompt: false,
  totalEarning: undefined,
  currencySymbol: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_SAVE_LOGIN_DETAILS: 
      return {
        ...state,
        userData: action.payload
      }
    default:
      return state;
  }
}
