import React, { useState, useContext } from 'react';

export const AuthContext = React.createContext({});
export const useAuth = () => useContext(AuthContext);

const TOKEN_KEY = 'token';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const setAuthTokenInLocalStorage = (authToken) => {
        authToken
            ? window.localStorage.setItem(TOKEN_KEY, authToken)
            : window.localStorage.removeItem(TOKEN_KEY);
    };

    const onLoginSuccess = ({ user, token }) => {
        setAuthTokenInLocalStorage(token);
        setUser(user);
    };

    const onReauthenticationSuccess = ({
        id,
        address,
        email,
        name,
        stripeCustomerId,
    }) => {
        if (!user) {
            setUser({
                id,
                address,
                email,
                name,
                stripeCustomerId,
            });
        }
        setLoading(false);
    };

    const onReauthenticationError = () => {
        setUser(null);
        setLoading(false);
    };

    const logout = () => {
        setAuthTokenInLocalStorage(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated:
                    !!user && !!window.localStorage.getItem(TOKEN_KEY),
                user,
                onLoginSuccess,
                logout,
                loading,
                onReauthenticationSuccess,
                onReauthenticationError,
            }}>
            {children}
        </AuthContext.Provider>
    );
};