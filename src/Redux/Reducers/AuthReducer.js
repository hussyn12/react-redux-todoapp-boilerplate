import authConstant from '../Constant/Auth'

const initialState = {
    register: false,
    isAuthenticated: false,
    token: {},
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case authConstant.REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case authConstant.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                register: true,
                error: null
            }
        case authConstant.REGISTER_ERRORS:
            return {
                ...state,
                loading: true,
                error: action.payload
            }    
        case authConstant.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            }
        case authConstant.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case authConstant.LOGIN_ERRORS:
            return {
                ...state,
                error: action.payload
            }
        case authConstant.LOGOUT:
            return initialState    
        default:
            return state
    }
}