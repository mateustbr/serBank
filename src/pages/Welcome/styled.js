import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  background-color: #cfe0bc;
`;

export const ContainerLogo = styled.View`
  flex: 2;
  background-color: #cfe0bc;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled(Animatable.View)`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 12px;
`;

export const TextDescription = styled.Text`
  color: #a1a1a1;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  background-color: #63783d;
  border-radius: 50px;
  padding-vertical: 8px;
  width: 60%;
  align-self: center;
  bottom: 15%;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
