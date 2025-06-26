import * as S from "./styles";

export const TextInput = ({ icon = null, ...props }) => {
  return (
    <S.Container>
      {icon}
      <S.Input {...props} />
    </S.Container>
  );
};
