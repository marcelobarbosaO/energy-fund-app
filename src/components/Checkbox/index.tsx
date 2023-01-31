import { CheckboxProps } from 'react-native-paper';

import Typography from '../Typography';

import * as S from './styles';

interface Props extends CheckboxProps {
  label?: React.ReactNode | string;
  checked?: boolean;
  onChange?: () => void;
}

const Checkbox = ({ label, checked = false, onChange, ...rest }: Props) => {
  return (
    <S.Container>
      <Checkbox onPress={onChange} {...rest} />
      {label && <Typography>{label}</Typography>}
    </S.Container>
  );
};

export default Checkbox;
