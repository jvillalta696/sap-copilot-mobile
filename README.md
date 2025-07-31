# 🤖 SAP Copilot Mobile

Una aplicación móvil inteligente desarrollada con React Native y Expo que proporciona un asistente virtual especializado en SAP para ejecutivos y profesionales de negocios.

## 📱 Características Principales

### 🔐 Autenticación Profesional
- Sistema de login diseñado específicamente para ejecutivos
- Interfaz elegante con tema corporativo SAP
- Persistencia segura de sesiones con AsyncStorage
- Validación robusta de credenciales

### 💬 Chat Inteligente
- Interfaz de chat profesional con animaciones suaves
- Mensajes diferenciados para usuario y bot
- Indicador de escritura en tiempo real
- Timestamps formateados localmente
- Input multilinea con validación
- Sugerencias contextuales por módulos SAP

### 🎨 Diseño Profesional
- Tema visual basado en colores corporativos SAP
- Navegación por tabs intuitiva
- Animaciones profesionales y atractivas
- Componentes reutilizables y modulares
- Responsive design para múltiples dispositivos

## 🛠️ Tecnologías Utilizadas

- **Framework**: React Native + Expo SDK 53.0.0
- **Navegación**: React Navigation 6
- **UI Components**: React Native Paper
- **Gestión de Estado**: Context API + useState/useEffect
- **Persistencia**: AsyncStorage
- **Iconos**: Expo Vector Icons
- **Animaciones**: React Native Animated API

## 📂 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── chat/            # Componentes específicos del chat
│   │   ├── ChatMessage.js    # Mensaje individual con animaciones
│   │   ├── ChatInput.js      # Input de escritura
│   │   ├── TypingIndicator.js # Indicador de escritura
│   │   ├── SuggestionPanel.js # Panel de sugerencias
│   │   └── index.js          # Exportaciones del módulo
│   └── common/          # Componentes generales
├── screens/             # Pantallas principales
│   ├── auth/           # Autenticación
│   │   └── LoginScreen.js
│   ├── common/         # Pantallas comunes
│   │   └── LoadingScreen.js
│   └── ChatScreen.js   # Pantalla principal del chat
├── navigation/         # Configuración de navegación
│   ├── AppNavigator.js     # Navegador principal
│   └── MainTabNavigator.js # Navegador por tabs
├── contexts/          # Context APIs
│   └── AuthContext.js # Gestión de autenticación
├── constants/         # Constantes globales
│   ├── colors.js      # Paleta de colores SAP
│   └── chatData.js    # Datos de sugerencias
└── hooks/            # Custom hooks
    ├── useAnimations.js # Hooks de animaciones
    └── index.js        # Exportaciones de hooks
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Expo CLI
- Dispositivo móvil con Expo Go o emulador

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jvillalta696/sap-copilot-mobile.git
   cd sap-copilot-mobile
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npx expo start
   # o
   npm start
   ```

4. **Ejecutar en dispositivo**
   - Escanea el código QR con Expo Go (Android/iOS)
   - O presiona `a` para Android emulator
   - O presiona `i` para iOS simulator

## 📋 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Iniciar con caché limpia
npm run start:clear

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en web
npm run web

# Limpiar caché de Metro
npm run clean
```

## 🎯 Funcionalidades Implementadas

### ✅ Completadas
- [x] Sistema de autenticación con persistencia
- [x] Navegación principal por tabs
- [x] Chat funcional con envío de mensajes
- [x] Componentes de UI profesionales
- [x] Tema corporativo SAP
- [x] Animaciones básicas
- [x] Gestión de estado con Context API
- [x] Validación de formularios
- [x] Indicadores de carga y estado

### 🚧 En Desarrollo
- [ ] Integración con APIs de SAP reales
- [ ] Persistencia de historial de chat
- [ ] Notificaciones push
- [ ] Mejoras en animaciones avanzadas
- [ ] Modo offline
- [ ] Analíticas de uso

### 📋 Roadmap
- [ ] Dashboard con métricas ejecutivas
- [ ] Configuración de perfil avanzada
- [ ] Integración con módulos SAP específicos
- [ ] Exportación de conversaciones
- [ ] Búsqueda en historial
- [ ] Personalización de temas

## 🔧 Configuración de Desarrollo

### Variables de Entorno
Crear archivo `.env` en la raíz del proyecto:
```env
EXPO_PUBLIC_API_URL=https://your-api-endpoint.com
EXPO_PUBLIC_SAP_CLIENT_ID=your-client-id
EXPO_PUBLIC_ENV=development
```

### Credenciales de Prueba
Para testing y desarrollo:
- **Usuario**: `admin` o `ejecutivo`
- **Contraseña**: `123456`

## 🎨 Guía de Estilo

### Colores Principales
```javascript
const colors = {
  primary: '#0070F3',      // SAP Blue
  secondary: '#FF6B35',    // SAP Orange
  success: '#07BC0C',      // SAP Green
  warning: '#E78200',      // SAP Yellow
  error: '#D32F2F',        // Error Red
  surface: '#FFFFFF',      // Background
  background: '#F5F7FA',   // Light Gray
  text: '#1A1A1A',        // Dark Text
  textSecondary: '#6B7280' // Secondary Text
}
```

### Componentes
- Usar React Native Paper para consistencia
- Implementar props de accesibilidad
- Seguir patrones de diseño Material Design
- Mantener responsividad en todos los tamaños

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm test

# Tests con coverage
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

## 📱 Compatibilidad

- **iOS**: 11.0+
- **Android**: API Level 21+ (Android 5.0+)
- **Expo SDK**: 53.0.0
- **React Native**: 0.73.6

## 👥 Contribución

1. Fork el proyecto
2. Crear branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

### Convenciones de Commits
```
feat: nueva funcionalidad
fix: corrección de bugs
docs: documentación
style: formateo, punto y coma faltante, etc
refactor: refactoring de código
test: agregar tests
chore: mantenimiento
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Soporte

- **Issues**: [GitHub Issues](https://github.com/jvillalta696/sap-copilot-mobile/issues)
- **Documentación**: [Wiki del proyecto](https://github.com/jvillalta696/sap-copilot-mobile/wiki)
- **Email**: soporte@sap-copilot.com

## 📊 Estado del Proyecto

![Estado del Build](https://img.shields.io/badge/build-passing-brightgreen)
![Versión](https://img.shields.io/badge/version-1.0.0-blue)
![Licencia](https://img.shields.io/badge/license-MIT-green)
![Expo SDK](https://img.shields.io/badge/expo-53.0.0-black)

---

**Desarrollado con ❤️ para la comunidad SAP**

*SAP Copilot Mobile - Transformando la experiencia móvil empresarial*
