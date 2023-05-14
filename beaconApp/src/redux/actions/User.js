export const TYPE_SAVE_LOGIN_DETAILS = "TYPE_SAVE_LOGIN_DETAILS"
export const saveUserDetailsInRedux = (details) => {
    return {
        type: TYPE_SAVE_LOGIN_DETAILS,
        payload: details
    }
}