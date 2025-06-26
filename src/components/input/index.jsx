import * as S from "./styles";

export const TextInput = ({
  title = "",
  marginBottom = 0,
  icon = null,
  ...props
}) => {
  return (
    <S.ContainerPrincipal marginBottom={marginBottom}>
      {title ? <S.Title>{title}</S.Title> : null}
      <S.Container>
        {icon}
        <S.Input {...props} />
      </S.Container>
    </S.ContainerPrincipal>
  );
};
