import React from 'react';
import { TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import { Header, Button, Checkbox, Input, Typography } from '#components';
import useUserStore from '#hooks/useStore';

import * as S from './styles';

const Register = ({ navigation }: PageProps) => {
  const { setAccounts, accounts } = useUserStore((state) => state);

  const [name, setName] = React.useState<string>('teste');
  const [lastName, setLastName] = React.useState<string>('teste');
  const [email, setEmail] = React.useState<string>('teste@teste.com');
  const [password, setPassword] = React.useState<string>('123456');
  const [terms, setTerms] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(false);

  const disabled = !name || !lastName || !email || !password || !terms;

  const existAccountWithEmail = React.useMemo(() => {
    if (accounts.length === 0) return false;

    return accounts.some((account) => account.email.trim() === email.trim());
  }, [accounts]);

  const handleRegister = () => {
    if (disabled) return;

    if (existAccountWithEmail)
      return Toast.show({
        type: 'info',
        text1: 'Warning',
        text2: 'Account exists.',
      });

    setAccounts({
      name: name.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
    });

    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Account successfully registered.',
    });

    navigation.goBack();
  };

  return (
    <S.Container>
      <Header canBack />

      <S.Content>
        <Typography centerAlign fontSize={18} bold>
          Create your account
        </Typography>

        <S.Form>
          <Input
            labelText="First Name"
            placeholder="Your first name"
            value={name}
            onChangeText={(name) => setName(name)}
          />

          <Input
            labelText="Last Name"
            placeholder="Your last name"
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
          />

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

          <Checkbox
            status={terms ? 'checked' : 'unchecked'}
            onChange={() => setTerms((prev) => !prev)}
            label={
              <Typography
                style={{ flex: 1, position: 'relative' }}
                grey
                fontSize={12}
              >
                I am over 18 years of age and I have read and agree to the{' '}
                <Typography
                  onPress={() => navigation.navigate('terms')}
                  fontSize={12}
                >
                  Terms of Service
                </Typography>{' '}
                and{' '}
                <Typography
                  onPress={() => navigation.navigate('privacy')}
                  fontSize={12}
                >
                  Privacy policy
                </Typography>
                .
              </Typography>
            }
          />

          <Button
            mode="contained"
            mt={17}
            mb={3}
            onPress={handleRegister}
            disabled={disabled}
          >
            Create Account
          </Button>

          <S.ButtonText onPress={() => navigation.goBack()}>
            <Typography fontSize={12} grey>
              Already have an account?{' '}
              <Typography fontSize={12}>Log in Here</Typography>
            </Typography>
          </S.ButtonText>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default Register;
