// Sugerencias de consultas según PROJECT_GUIDE.md
export const CHAT_SUGGESTIONS = {
  ventas: [
    "¿Cuáles son mis ventas de este mes?",
    "Muéstrame los productos más vendidos",
    "¿Cuál es mi meta de ventas?",
    "Comparar ventas del mes anterior"
  ],
  clientes: [
    "¿Qué clientes tienen facturas vencidas?",
    "Buscar cliente por nombre",
    "Clientes con mayor volumen de compra",
    "Nuevos clientes este mes"
  ],
  inventario: [
    "¿Qué productos están en stock bajo?",
    "Movimientos de inventario recientes",
    "Productos próximos a vencer",
    "Reporte de entrada y salida"
  ],
  finanzas: [
    "Reporte de ingresos y gastos",
    "Estado de flujo de caja",
    "Comparativa mensual",
    "Cuentas por cobrar"
  ]
};

// Comandos rápidos
export const QUICK_COMMANDS = [
  { command: '/ventas', description: 'Dashboard de ventas', icon: 'chart-line' },
  { command: '/clientes', description: 'Lista de clientes', icon: 'account-group' },
  { command: '/inventario', description: 'Estado de stock', icon: 'package-variant' },
  { command: '/reportes', description: 'Reportes generales', icon: 'file-chart' }
];

// Categorías de sugerencias
export const SUGGESTION_CATEGORIES = [
  { key: 'ventas', title: 'Ventas', icon: 'chart-line', color: '#107C10' },
  { key: 'clientes', title: 'Clientes', icon: 'account-group', color: '#0078D4' },
  { key: 'inventario', title: 'Inventario', icon: 'package-variant', color: '#FF8C00' },
  { key: 'finanzas', title: 'Finanzas', icon: 'cash', color: '#6264A7' }
];

export default {
  CHAT_SUGGESTIONS,
  QUICK_COMMANDS,
  SUGGESTION_CATEGORIES
};
