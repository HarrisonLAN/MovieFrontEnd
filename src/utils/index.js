const TOKEN_KEY = 'jwt';

export const login = (jwt) => {
    localStorage.setItem(TOKEN_KEY, jwt);
}

export const logout = (jwt) => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = (jwt) => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}
export const logiutilsJWTnDets = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return localStorage.getItem(TOKEN_KEY);
    }else{
        return false;
    }

}