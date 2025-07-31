// Configuración de la API según PROJECT_GUIDE.md
export const API_CONFIG = {
  BASE_URL: 'http://localhost:3000',
  ENDPOINTS: {
    COPILOT_MESSAGE: '/copilot/message',
    COPILOT_CONFIG: '/copilot/config',
    COPILOT_USAGE: '/copilot/usage',
    HEALTH: '/health'
  },
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3
};

// Configuración de la aplicación
export const APP_CONFIG = {
  NAME: 'SAP Copilot Mobile',
  VERSION: '1.0.0',
  BUILD: '1',
  ENABLE_LOGGING: __DEV__,
  DEFAULT_USER_ID: 'mobile_user'
};

// Configuración de navegación
export const NAVIGATION_CONFIG = {
  INITIAL_ROUTE: 'Login',
  ANIMATION_DURATION: 300
};

export default {
  API_CONFIG,
  APP_CONFIG,
  NAVIGATION_CONFIG
};
