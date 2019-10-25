const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const InitialState = {
    logins: [
        { userName: "Admin", password: "Admin" },
        { userName: "Izob", password: "Izob123" },
        { userName: "Admin1", password: "Admin1" },
    ],
    isAuth: false,
    error: null,

}

const auth_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOGIN:
            let success = InitialState.logins.filter(item => (item.userName === action.userName) && (item.password === action.password))
            if (success.length >= 1) {

                return {
                    ...state,
                    isAuth: true
                }

            } else {
                return {
                    ...state,
                    error: "Uncorrect User Name or Password"
                }
            }

        case LOGOUT:
            return {
                ...state,
                isAuth: false,
            }

        default: return state
    }

}

export const Login = (userName, password) => ({ type: LOGIN, userName, password });
export const Logout = () => ({ type: LOGOUT })


export default auth_reducer;

