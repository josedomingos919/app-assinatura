export function compararStringsLimpa(key, str) {
  function limparString(s) {
    return s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  return limparString(str).includes(limparString(key));
}
