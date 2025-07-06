import { compararStringsLimpa } from "../src/app/home/util";
import { isValidEmail } from "../src/app/singup/util";

import { fireEvent, render } from "@testing-library/react-native";
import { Button } from "../src/components";

test("Deve falar que o email é inválido", () => {
  expect(isValidEmail("teste")).toBe(false);
});

test("Deve falar que os nomes são iguais", () => {
  expect(compararStringsLimpa("Antonio", "antónio")).toBe(true);
});

test("Deve clicar no botão", () => {
  const mockFn = jest.fn();
  const { getByText } = render(<Button title="Ola" onPress={mockFn} />);
  fireEvent.press(getByText("Ola"));
  expect(mockFn).toHaveBeenCalled();
});
