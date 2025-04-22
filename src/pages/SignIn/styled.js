import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  background-color: #cfe0bc;
`;

export const ContainerHeader = styled(Animatable.View)`
  margin-top: 14%;
  margin-bottom: 8%;
  padding-left: 5%;
`;

export const Message = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
`;

export const ContainerForm = styled(Animatable.View)`
  background-color: #fff;
  flex: 1;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 28px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  height: 40px;
  margin-bottom: 12px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #63783d;
  width: 100%;
  border-radius: 4px;
  padding-vertical: 8px;
  margin-top: 14px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonRegister = styled.TouchableOpacity`
  margin-top: 14px;
  align-self: center;
`;

export const RegisterText = styled.Text`
  color: #a1a1a1;
`;
