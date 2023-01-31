import * as S from './styles';

const Button = ({ children, ...rest }: S.ButtonAppProps) => (
  <S.Button {...rest} labelStyle={{ fontFamily: 'Sora_400Regular' }}>
    {children}
  </S.Button>
);

export default Button;
