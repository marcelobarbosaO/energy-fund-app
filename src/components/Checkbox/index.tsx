import { Checkbox as Check, CheckboxProps } from 'react-native-paper';

import theme from '#theme';

import * as S from './styles';

interface Props extends CheckboxProps {
  label?: React.ReactNode;
  onChange?: () => void;
}

const Checkbox = ({ label, onChange, ...rest }: Props) => {
  return (
    <S.Container>
      <Check
        onPress={onChange}
        {...rest}
        uncheckedColor={theme.colors.border}
      />

      {label ? label : null}
    </S.Container>
  );
};

export default Checkbox;
