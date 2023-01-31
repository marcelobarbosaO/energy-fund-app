import React from 'react';
import { TextInput } from 'react-native-paper';

import { Header, Button, Input, Typography } from '#components';

import * as S from './styles';

const SignIn = ({ navigation }: PageProps) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [visible, setVisible] = React.useState<boolean>(false);

  const disabled = !email && !password;

  const handleSignIn = () => {
    if (disabled) return;

    navigation.navigate('tabs');
  };

  return (
    <S.Container>
      <Header />

      <S.Content>
        <Typography centerAlign fontSize={18} bold>
          Login
        </Typography>

        <S.Form>
          <Input
            labelText="Email"
            placeholder="Your email address"
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
          />

          <Input
            labelText="Password"
            placeholder="Minimum 8 characters"
            value={password}
            secureTextEntry={!visible}
            right={
              <TextInput.Icon
                icon={visible ? 'eye-off' : 'eye'}
                color="#A0A0A0"
                onPress={() => setVisible((prev) => !prev)}
              />
            }
            onChangeText={(password) => setPassword(password)}
          />

          <Button
            mode="contained"
            mt={17}
            mb={13}
            onPress={handleSignIn}
            disabled={disabled}
          >
            Login
          </Button>

          <S.ButtonText onPress={() => navigation.navigate('register')}>
            <Typography fontSize={12} grey>
              Don't have an account? Sign Up here
            </Typography>
          </S.ButtonText>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
