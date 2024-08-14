import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }else{
            setIsAuthenticated(false);
        }
        setLoading(false);
    }, [setIsAuthenticated]);

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}
