// Exportar todas las constantes
export { default as colors } from './colors';
export { default as config } from './config';
export { default as chatData } from './chatData';

// Re-export para fácil acceso
export { colors as Colors } from './colors';
export { API_CONFIG, APP_CONFIG, NAVIGATION_CONFIG } from './config';
export { CHAT_SUGGESTIONS, QUICK_COMMANDS, SUGGESTION_CATEGORIES } from './chatData';
