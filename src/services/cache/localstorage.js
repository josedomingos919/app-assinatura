import * as SecureStore from "expo-secure-store";

// Guardar una contraseña
async function set(key, value) {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
}

// Leer una contraseña
async function get(key) {
  try {
    const password = await SecureStore.getItemAsync(key);
    return JSON.parse(password);
  } catch (error) {
    return null;
  }
}

// Eliminar la contraseña
async function remove(key) {
  await SecureStore.deleteItemAsync(key);
}

export const secureStorage = { remove, set, get };
