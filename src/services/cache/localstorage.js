import * as SecureStore from "expo-secure-store";

// Guardar una contraseña
async function set(key, value) {
  await SecureStore.setItemAsync(key, value);
}

// Leer una contraseña
async function get(key) {
  const password = await SecureStore.getItemAsync(key);
  return password;
}

// Eliminar la contraseña
async function remove(key) {
  await SecureStore.deleteItemAsync(key);
}

export const secureStorage = { remove, set, get };
