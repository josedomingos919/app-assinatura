import { compararStringsLimpa } from "../src/app/home/util";
import { isValidEmail } from "../src/app/singup/util";

test("Deve falar que o email é inválido", () => {
  expect(isValidEmail("teste")).toBe(false);
});

test("Deve falar que os nomes são iguais", () => {
  expect(compararStringsLimpa("Antonio", "antónio")).toBe(true);
});
