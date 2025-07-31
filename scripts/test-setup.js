#!/usr/bin/env node

/**
 * Script de Testing para SAP Copilot Mobile
 * Verifica que la estructura del proyecto y dependencias estén correctas
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando estructura del proyecto SAP Copilot Mobile...\n');

// Verificar estructura de carpetas
const requiredDirs = [
  'src',
  'src/components',
  'src/components/ui',
  'src/components/chat',
  'src/components/analytics',
  'src/components/common',
  'src/screens',
  'src/screens/auth',
  'src/screens/chat',
  'src/screens/dashboard',
  'src/screens/profile',
  'src/screens/settings',
  'src/navigation',
  'src/contexts',
  'src/services',
  'src/hooks',
  'src/utils',
  'src/constants',
  'src/assets'
];

console.log('📁 Verificando estructura de carpetas:');
let missingDirs = [];

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`  ✅ ${dir}`);
  } else {
    console.log(`  ❌ ${dir} - FALTANTE`);
    missingDirs.push(dir);
  }
});

// Verificar archivos de configuración
const requiredFiles = [
  'src/constants/colors.js',
  'src/constants/config.js',
  'src/constants/chatData.js',
  'src/constants/index.js',
  'src/services/apiClient.js',
  'src/services/copilotService.js',
  'src/services/index.js',
  'src/contexts/AuthContext.js',
  'src/contexts/index.js',
  'PROJECT_GUIDE.md'
];

console.log('\n📄 Verificando archivos de configuración:');
let missingFiles = [];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - FALTANTE`);
    missingFiles.push(file);
  }
});

// Verificar package.json y dependencias
console.log('\n📦 Verificando dependencias:');
if (fs.existsSync('package.json')) {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  
  const requiredDeps = [
    '@react-navigation/native',
    '@react-navigation/stack',
    '@react-navigation/bottom-tabs',
    'react-native-screens',
    'react-native-safe-area-context',
    '@react-native-async-storage/async-storage',
    'axios',
    'react-native-uuid',
    'react-native-paper',
    'react-native-vector-icons'
  ];

  let missingDeps = [];
  
  requiredDeps.forEach(dep => {
    if (dependencies[dep]) {
      console.log(`  ✅ ${dep} (${dependencies[dep]})`);
    } else {
      console.log(`  ❌ ${dep} - FALTANTE`);
      missingDeps.push(dep);
    }
  });

  if (missingDeps.length > 0) {
    console.log('\n⚠️  Dependencias faltantes detectadas. Ejecuta:');
    console.log(`npm install ${missingDeps.join(' ')}`);
  }
} else {
  console.log('  ❌ package.json no encontrado');
}

// Verificar que los archivos de configuración sean válidos
console.log('\n🔧 Verificando configuraciones:');

try {
  if (fs.existsSync('src/constants/colors.js')) {
    const colors = require('./src/constants/colors.js');
    if (colors.default && colors.default.primary) {
      console.log('  ✅ Paleta de colores configurada correctamente');
    } else {
      console.log('  ⚠️  Paleta de colores incompleta');
    }
  }
} catch (error) {
  console.log('  ❌ Error en configuración de colores:', error.message);
}

// Resumen
console.log('\n📊 RESUMEN:');
console.log(`  Carpetas: ${requiredDirs.length - missingDirs.length}/${requiredDirs.length} ✅`);
console.log(`  Archivos: ${requiredFiles.length - missingFiles.length}/${requiredFiles.length} ✅`);

if (missingDirs.length === 0 && missingFiles.length === 0) {
  console.log('\n🎉 ¡Configuración inicial completada exitosamente!');
  console.log('\n📋 Próximos pasos:');
  console.log('  1. Crear navegación básica');
  console.log('  2. Implementar pantallas de autenticación');
  console.log('  3. Configurar temas y UI');
  console.log('  4. Desarrollar interfaz de chat');
} else {
  console.log('\n⚠️  Hay elementos faltantes que deben ser creados antes de continuar.');
}

console.log('\n💡 Para ejecutar la app: npm start o expo start');
console.log('📖 Consulta PROJECT_GUIDE.md para más detalles');
