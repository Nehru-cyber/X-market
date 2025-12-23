import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('xmarket-user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [isAuthenticated, setIsAuthenticated] = useState(!!user);

    useEffect(() => {
        if (user) {
            localStorage.setItem('xmarket-user', JSON.stringify(user));
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem('xmarket-user');
            setIsAuthenticated(false);
        }
    }, [user]);

    const login = (email, password) => {
        // Simulate login - in production, this would call an API
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const userData = {
                        id: Date.now(),
                        email,
                        name: email.split('@')[0],
                        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=6366f1&color=fff`
                    };
                    setUser(userData);
                    resolve(userData);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 500);
        });
    };

    const register = (userData) => {
        // Simulate registration
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userData.email && userData.password) {
                    const newUser = {
                        id: Date.now(),
                        email: userData.email,
                        name: userData.name || userData.email.split('@')[0],
                        avatar: `https://ui-avatars.com/api/?name=${userData.name || userData.email.split('@')[0]}&background=6366f1&color=fff`
                    };
                    setUser(newUser);
                    resolve(newUser);
                } else {
                    reject(new Error('Registration failed'));
                }
            }, 500);
        });
    };

    const logout = () => {
        setUser(null);
    };

    const updateProfile = (updates) => {
        setUser(prevUser => ({ ...prevUser, ...updates }));
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
                register,
                logout,
                updateProfile
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
