# Despliegue de Aplicación Expo

Este documento proporciona una guía paso a paso para desplegar una aplicación Expo.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- Node.js (versión 12 o superior)
- Expo CLI (`npm install -g expo-cli`)

## Pasos para Desplegar

1. **Clonar el repositorio:**

   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar dependencias:**

   ```sh
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```sh
   npx expo start
   ```

4. **Abrir la aplicación en un dispositivo o emulador:**

   - **Dispositivo físico:** Escanea el código QR con la aplicación Expo Go.
   - **Emulador Android:** Asegúrate de tener Android Studio configurado y ejecuta `expo start --android`.
   - **Emulador iOS:** Asegúrate de tener Xcode configurado y ejecuta `expo start --ios`.


- [Documentación de Expo](https://docs.expo.dev/)
- [Guía de despliegue de Expo](https://docs.expo.dev/distribution/introduction/)
