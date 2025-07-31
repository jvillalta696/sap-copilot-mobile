import apiClient from './apiClient';
import { API_CONFIG } from '../constants/config';

class CopilotService {
  /**
   * Enviar mensaje al copilot
   * @param {string} message - Mensaje del usuario
   * @param {string} userId - ID del usuario
   * @returns {Promise} Respuesta del API
   */
  async sendMessage(message, userId = 'mobile_user') {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.COPILOT_MESSAGE, {
        message: message.trim(),
        userId
      });
      
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Error de conexión',
        statusCode: error.response?.status
      };
    }
  }

  /**
   * Obtener configuración del copilot
   * @returns {Promise} Configuración del sistema
   */
  async getConfig() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.COPILOT_CONFIG);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Error de conexión'
      };
    }
  }

  /**
   * Obtener uso de tokens del usuario
   * @param {string} userId - ID del usuario
   * @returns {Promise} Estadísticas de uso
   */
  async getUserUsage(userId = 'mobile_user') {
    try {
      const response = await apiClient.get(`${API_CONFIG.ENDPOINTS.COPILOT_USAGE}/${userId}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Error de conexión'
      };
    }
  }

  /**
   * Verificar estado del backend
   * @returns {Promise} Estado del servidor
   */
  async checkHealth() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.HEALTH);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Backend no disponible'
      };
    }
  }
}

export default new CopilotService();
