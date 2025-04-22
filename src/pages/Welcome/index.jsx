import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import * as S from './styled';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ContainerLogo>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/serbank.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </S.ContainerLogo>

      <S.ContainerForm animation="fadeInUp" delay={600}>
        <S.Title>O futuro do seu dinheiro começa aqui.</S.Title>
        <S.TextDescription>Faça o login para começar</S.TextDescription>

        <S.Button onPress={() => navigation.navigate('SignIn')}>
          <S.ButtonText>Acessar</S.ButtonText>
        </S.Button>
      </S.ContainerForm>
    </S.Container>
  );
}
