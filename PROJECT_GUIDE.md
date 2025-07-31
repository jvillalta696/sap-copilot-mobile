# SAP Copilot Mobile - Guía del Proyecto

## 📱 Descripción General
Aplicación móvil de chat inteligente para SAP Business One, integrada con backend de IA que utiliza GPT para procesamiento de lenguaje natural y detección de intenciones.

## 🎯 Objetivo
Crear una experiencia de usuario similar a GitHub Copilot pero enfocada en consultas y gestión de datos SAP a través de conversaciones naturales.

---

## 🏗️ Estructura de Carpetas

```
sap-copilot-mobile/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── ui/              # Componentes básicos (Button, Input, etc)
│   │   ├── chat/            # Componentes específicos del chat
│   │   ├── analytics/       # Gráficos y visualizaciones
│   │   └── common/          # Headers, Loading, etc
│   ├── screens/             # Pantallas principales
│   │   ├── auth/            # Login/Register/ForgotPassword
│   │   ├── chat/            # Chat principal y historial
│   │   ├── dashboard/       # Dashboard con métricas
│   │   ├── profile/         # Perfil de usuario
│   │   └── settings/        # Configuraciones
│   ├── navigation/          # Navegación (Stack, Tab, Drawer)
│   ├── contexts/            # Context API (Auth, Chat, Theme)
│   ├── services/            # APIs y servicios externos
│   ├── hooks/               # Custom hooks
│   ├── utils/               # Utilidades y helpers
│   ├── constants/           # Constantes, colores, endpoints
│   └── assets/              # Imágenes, iconos, fuentes
├── App.js
├── package.json
└── PROJECT_GUIDE.md
```

---

## 🎨 Diseño y Estilo

### Paleta de Colores (Estilo Business/Copilot)
```javascript
const colors = {
  // Colores principales
  primary: '#0078D4',        // Azul Microsoft
  secondary: '#6264A7',      // Azul Teams
  success: '#107C10',        // Verde SAP
  warning: '#FF8C00',        // Naranja
  error: '#D13438',          // Rojo
  
  // Backgrounds
  background: '#F3F2F1',     // Gris claro
  surface: '#FFFFFF',        // Blanco
  
  // Textos
  text: '#323130',           // Gris oscuro
  textSecondary: '#605E5C',  // Gris medio
  
  // Elementos
  border: '#EDEBE9',         // Borde sutil
  accent: '#8764B8'          // Morado accent
}
```

### Principios de Diseño
- **Cards con sombras suaves**
- **Gradientes sutiles**
- **Esquinas redondeadas (8-12px)**
- **Animaciones smooth (300ms)**
- **Iconografía consistente**
- **Typography jerárquica**

---

## 📱 Módulos y Pantallas

### 1. 🔐 Autenticación (`/screens/auth`)
```
├── LoginScreen.js           # Login principal con email/password
├── RegisterScreen.js        # Registro de nuevo usuario
├── ForgotPasswordScreen.js  # Recuperación de contraseña
└── OnboardingScreen.js      # Tutorial inicial de la app
```

**Funcionalidades:**
- Login/Logout básico
- Validación de formularios
- Manejo de errores
- Preparación para biometría
- Sesión persistente

### 2. 💬 Chat Principal (`/screens/chat`)
```
├── ChatScreen.js            # Interfaz principal de chat
├── ChatHistoryScreen.js     # Historial de conversaciones
├── SuggestionsPanel.js      # Panel de sugerencias contextuales
└── QuickActionsPanel.js     # Acciones rápidas predefinidas
```

**Funcionalidades:**
- Chat en tiempo real
- Historial persistente
- Sugerencias inteligentes
- Comandos rápidos (/ventas, /clientes)
- Búsqueda en conversaciones

### 3. 📊 Dashboard (`/screens/dashboard`)
```
├── DashboardScreen.js       # Métricas principales y KPIs
├── SalesOverviewScreen.js   # Resumen detallado de ventas
├── InventoryStatusScreen.js # Estado actual del inventario
└── FinancialSummaryScreen.js # Resumen financiero
```

**Funcionalidades:**
- Visualizaciones interactivas
- Métricas en tiempo real
- Filtros temporales
- Exportación de datos

### 4. 👤 Perfil y Configuración (`/screens/profile`)
```
├── ProfileScreen.js         # Información del usuario
├── SettingsScreen.js        # Configuraciones generales
├── NotificationsScreen.js   # Gestión de notificaciones
└── PreferencesScreen.js     # Preferencias personalizadas
```

### 5. 📈 Funcionalidades Adicionales
```
├── ReportsScreen.js         # Reportes detallados
├── SearchScreen.js          # Búsqueda avanzada
├── FavoritesScreen.js       # Consultas favoritas
└── OfflineScreen.js         # Modo offline
```

---

## 🚀 Funcionalidades Principales

### ✅ **Fase 1: Core (MVP)**
1. **Autenticación Básica**
   - Login/Logout
   - Context de usuario
   - Sesión persistente
   - Manejo de estados

2. **Chat Básico**
   - Interfaz de conversación
   - Integración con API backend
   - Historial local
   - Estados de carga

3. **Navegación**
   - Stack Navigator
   - Tab Navigator
   - Drawer opcional

### 🔄 **Fase 2: Enhanced**
4. **Visualizaciones**
   - Gráficos interactivos
   - Tablas responsive
   - Cards informativas
   - Métricas en tiempo real

5. **Sugerencias Inteligentes**
   - Consultas frecuentes
   - Comandos contextuales
   - Autocompletado
   - Favoritos

### 🎯 **Fase 3: Advanced**
6. **Notificaciones Push**
   - Alertas de sistema
   - Recordatorios
   - Métricas críticas

7. **Funciones Nativas**
   - Biometría (FaceID/TouchID)
   - Compartir contenido
   - Modo offline
   - Dark/Light theme

8. **Personalización**
   - Temas customizables
   - Layout adaptativo
   - Preferencias de usuario

---

## 💡 Sugerencias de Consultas

### 📊 Ventas y Reportes
- "¿Cuáles son mis ventas de este mes?"
- "Muéstrame los productos más vendidos"
- "¿Cuál es mi meta de ventas?"
- "Comparar ventas del mes anterior"

### 👥 Clientes
- "¿Qué clientes tienen facturas vencidas?"
- "Buscar cliente por nombre"
- "Clientes con mayor volumen de compra"
- "Nuevos clientes este mes"

### 📦 Inventario
- "¿Qué productos están en stock bajo?"
- "Movimientos de inventario recientes"
- "Productos próximos a vencer"
- "Reporte de entrada y salida"

### 💰 Finanzas
- "Reporte de ingresos y gastos"
- "Estado de flujo de caja"
- "Comparativa mensual"
- "Cuentas por cobrar"

### ⚡ Comandos Rápidos
- `/ventas` - Dashboard de ventas
- `/clientes` - Lista de clientes
- `/inventario` - Estado de stock
- `/reportes` - Reportes generales

---

## 🛠️ Stack Tecnológico

### **Core**
```json
{
  "platform": "React Native + Expo",
  "language": "JavaScript",
  "navigation": "@react-navigation/native",
  "state": "Context API + useState/useReducer"
}
```

### **UI/UX**
```json
{
  "ui_library": "react-native-paper",
  "icons": "react-native-vector-icons",
  "animations": "react-native-reanimated",
  "charts": "react-native-chart-kit"
}
```

### **Funcionalidades**
```json
{
  "storage": "@react-native-async-storage/async-storage",
  "http": "axios",
  "notifications": "@react-native-firebase/messaging",
  "biometrics": "react-native-biometrics",
  "permissions": "react-native-permissions"
}
```

### **Desarrollo**
```json
{
  "linting": "eslint",
  "formatting": "prettier",
  "testing": "jest + react-native-testing-library",
  "debugging": "flipper"
}
```

---

## 🔌 Integración con Backend

### **Endpoint Principal**
```
POST http://localhost:3000/copilot/message
Content-Type: application/json

{
  "message": "¿cuáles son mis ventas de este mes?",
  "userId": "usuario_mobile"
}
```

### **Respuesta Esperada**
```json
{
  "message": "Respuesta humanizada del asistente",
  "intent": "sales-monthly-total",
  "confidence": 0.95,
  "tokensUsed": 150,
  "data": { /* datos estructurados */ },
  "mode": "gpt"
}
```

### **Endpoints Adicionales**
- `GET /copilot/config` - Configuración del sistema
- `GET /copilot/usage/:userId` - Uso de tokens
- `GET /health` - Estado del backend

---

## 📋 Roadmap de Desarrollo

### **Sprint 1: Setup y Autenticación** (Semana 1)
- [ ] Configuración inicial del proyecto
- [ ] Estructura de carpetas
- [ ] Navegación básica
- [ ] Pantallas de autenticación
- [ ] Context de usuario

### **Sprint 2: Chat Básico** (Semana 2)
- [ ] Interfaz de chat
- [ ] Integración con API
- [ ] Manejo de estados
- [ ] Historial básico

### **Sprint 3: Sugerencias y UX** (Semana 3)
- [ ] Panel de sugerencias
- [ ] Comandos rápidos
- [ ] Mejoras de UX
- [ ] Manejo de errores

### **Sprint 4: Dashboard y Visualizaciones** (Semana 4)
- [ ] Dashboard principal
- [ ] Gráficos básicos
- [ ] Métricas clave
- [ ] Navegación entre módulos

### **Sprint 5: Pulido y Testing** (Semana 5)
- [ ] Testing completo
- [ ] Optimizaciones
- [ ] Documentación
- [ ] Preparación para release

---

## 🔧 Configuración Inicial

### **Variables de Entorno**
```env
API_BASE_URL=http://localhost:3000
API_TIMEOUT=10000
ENABLE_LOGGING=true
```

### **Dependencias Principales**
```bash
# Navegación
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs

# UI
npm install react-native-paper react-native-vector-icons

# Storage y HTTP
npm install @react-native-async-storage/async-storage axios

# Utilidades
npm install react-native-uuid react-native-toast-message
```

---

## 📝 Notas de Desarrollo

### **Convenciones de Código**
- Componentes en PascalCase
- Archivos en camelCase
- Constantes en UPPER_CASE
- Hooks personalizados con prefijo "use"

### **Estructura de Componentes**
```javascript
// Imports
import React from 'react';
import { View, Text } from 'react-native';

// Component
const ComponentName = ({ prop1, prop2 }) => {
  // Hooks y estado
  // Funciones
  // Render
  return (
    <View>
      <Text>{prop1}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  // estilos aquí
});

export default ComponentName;
```

### **Manejo de Estados**
- Context API para estado global (auth, theme)
- useState para estado local
- useReducer para lógica compleja

---

## 🎯 Objetivos de UX

1. **Simplicidad**: Interfaz intuitiva y minimalista
2. **Velocidad**: Respuestas rápidas y fluidas
3. **Accesibilidad**: Compatible con lectores de pantalla
4. **Consistencia**: Diseño coherente en toda la app
5. **Feedback**: Indicadores claros de estado y progreso

---

## 📞 API del Backend (Referencia)

### **Módulos SAP Disponibles**
- **Ventas**: Reportes, productos top, métricas
- **Clientes**: Gestión, deudas, búsqueda
- **Inventario**: Stock, movimientos, alertas
- **Finanzas**: Ingresos, gastos, flujo de caja
- **Facturas**: Vencidas, por fecha, gestión
- **Pagos**: Programación, historial, registro
- **Cotizaciones**: Activas, creación, seguimiento
- **Proveedores**: Gestión, creación, contacto
- **Documentos**: Archivos, gestión documental
- **Sistema**: Logs, sincronización, estado

---

**Última actualización**: 30 de Julio, 2025
**Versión**: 1.0.0
**Autor**: Equipo SAP Copilot
