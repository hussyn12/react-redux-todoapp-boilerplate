import setAuthToken from '../../Utils/AuthToken'
import authConstant from '../Constant/Auth'
import AuthService from '../../Services/AuthService'

export const loginRequest = () => {
    return {
        type: authConstant.LOGIN_REQUEST,
    }
}

export const loginSucess = data => {
    return {
        type: authConstant.LOGIN_SUCCESS,
        payload: data
    }
}

export const loginFailure = error => {
    return {
        type: authConstant.LOGIN_ERRORS,
        payload: error
    }
}

export const registerRequest = data => {
    return {
        type: authConstant.REGISTER_REQUEST,
        payload: data
    }
}

export const registerSuccess = data => {
    return {
        type: authConstant.REGISTER_SUCCESS,
        payload: data
    }
}

export const registerFailure = error => {
    return {
        type: authConstant.REGISTER_ERRORS,
        payload: error
    }
}

export const logout = () => {
    return { type: authConstant.LOGOUT };
  
}

export const registerUser = userData => {
    return async dispatch => {
        try {
            dispatch(registerRequest(userData))
            const res = await AuthService.register(userData)
            if (res) {
                dispatch(registerSuccess(res))
            }
        }
        catch (e) {
            console.log(e)
            dispatch(registerFailure("An error occured during registration"))
        }
    }
}

export const loginUser = userData => {
    return async dispatch => {
        try {
            dispatch(loginRequest(userData))
            const res = await AuthService.signIn(userData)
            if (res) {
                setAuthToken(res)
                dispatch(loginSucess(res))
            }
        }    
        catch (e) {
            console.log(e)
            dispatch(loginFailure("An error occured"))
        }
    }    
}

export const logoutUser = () => {
    return dispatch => {
        localStorage.removeItem("JwtToken")
        dispatch(logout())
    }
}