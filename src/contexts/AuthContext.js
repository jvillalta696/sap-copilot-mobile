import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Estados iniciales
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null
};

// Tipos de acciones
const AuthActionTypes = {
  SET_LOADING: 'SET_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESTORE_SESSION: 'RESTORE_SESSION'
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null
      };
    
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload
      };
    
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null
      };
    
    case AuthActionTypes.CLEAR_ERROR:
      return { ...state, error: null };
    
    case AuthActionTypes.RESTORE_SESSION:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        loading: false
      };
    
    default:
      return state;
  }
};

// Context
const AuthContext = createContext();

// Storage keys
const STORAGE_KEYS = {
  USER: '@sap_copilot_user',
  AUTH_STATE: '@sap_copilot_auth'
};

// Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Restaurar sesión al iniciar la app
  useEffect(() => {
    restoreSession();
  }, []);

  const restoreSession = async () => {
    try {
      const [userData, authState] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.USER),
        AsyncStorage.getItem(STORAGE_KEYS.AUTH_STATE)
      ]);

      if (userData && authState) {
        const user = JSON.parse(userData);
        const isAuthenticated = JSON.parse(authState);

        dispatch({
          type: AuthActionTypes.RESTORE_SESSION,
          payload: { user, isAuthenticated }
        });
      } else {
        dispatch({ type: AuthActionTypes.SET_LOADING, payload: false });
      }
    } catch (error) {
      console.error('Error restoring session:', error);
      dispatch({ type: AuthActionTypes.SET_LOADING, payload: false });
    }
  };

  const login = async (credentials) => {
    try {
      dispatch({ type: AuthActionTypes.SET_LOADING, payload: true });

      // TODO: Implementar llamada real a la API de autenticación
      // Por ahora simulamos un login básico
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay

      const mockUser = {
        id: 'user_123',
        email: credentials.email,
        name: credentials.email.split('@')[0],
        company: 'SAP Demo Company',
        avatar: null,
        createdAt: new Date().toISOString()
      };

      // Guardar en storage
      await Promise.all([
        AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(mockUser)),
        AsyncStorage.setItem(STORAGE_KEYS.AUTH_STATE, JSON.stringify(true))
      ]);

      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: mockUser
      });

      return { success: true };
    } catch (error) {
      const errorMessage = error.message || 'Error de autenticación';
      dispatch({
        type: AuthActionTypes.LOGIN_FAILURE,
        payload: errorMessage
      });
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      await Promise.all([
        AsyncStorage.removeItem(STORAGE_KEYS.USER),
        AsyncStorage.removeItem(STORAGE_KEYS.AUTH_STATE)
      ]);

      dispatch({ type: AuthActionTypes.LOGOUT });
      return { success: true };
    } catch (error) {
      console.error('Error during logout:', error);
      return { success: false, error: error.message };
    }
  };

  const clearError = () => {
    dispatch({ type: AuthActionTypes.CLEAR_ERROR });
  };

  const value = {
    ...state,
    login,
    logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
