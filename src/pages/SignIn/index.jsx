import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styled';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ContainerHeader animation="fadeInLeft" delay={500}>
        <S.Message>Bem-Vindo</S.Message>
      </S.ContainerHeader>

      <S.ContainerForm animation="fadeInUp">
        <S.Title>Email</S.Title>
        <S.Input placeholder="Digite um email..." />

        <S.Title>Senha</S.Title>
        <S.Input placeholder="Sua Senha" secureTextEntry />

        <S.Button onPress={() => navigation.navigate('Home')}>
          <S.ButtonText>Acessar</S.ButtonText>
        </S.Button>

        <S.ButtonRegister>
          <S.RegisterText>Não possui uma conta? Cadastre-se</S.RegisterText>
        </S.ButtonRegister>
      </S.ContainerForm>
    </S.Container>
  );
}
