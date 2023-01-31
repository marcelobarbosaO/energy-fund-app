import { TextInput, TextInputProps } from 'react-native-paper';

import theme from '#theme';

import Typography from '../Typography';

import * as S from './styles';

interface InputProps extends TextInputProps {
  labelText: string;
}

const Input = ({ value, labelText, onChangeText, ...rest }: InputProps) => {
  return (
    <S.Container>
      <Typography variant="labelSmall">{labelText}</Typography>

      <TextInput
        value={value}
        mode="outlined"
        onChangeText={onChangeText}
        outlineColor="transparent"
        activeOutlineColor="#999"
        placeholderTextColor={theme.colors.placeholder}
        style={{
          backgroundColor: theme.colors.background_light,
          borderRadius: 4,
        }}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
