import * as S from "./styles";

export const Button = ({
  icon = null,
  title = "Adicionar Assinatura",
  ...restProps
}) => {
  return (
    <S.Button {...restProps}>
      {icon}
      <S.Title>{title}</S.Title>
    </S.Button>
  );
};
