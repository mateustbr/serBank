import { View, Text } from 'react-native'
import React from 'react'
import { Container, Button, ButtonText, InfoContainer, InfoContent, InfoTitle } from './styled'

const CardsInfo = () => {
  return (
    <>
        <Container>
            <Button background={"#d8d8d8"}>
                <ButtonText>ANTECIPAR</ButtonText>
            </Button>
            <InfoContainer>
                <InfoTitle>PRÓXIMAS FATURAS</InfoTitle>
                <InfoContent color={"#000000"}>R$ 640,53</InfoContent>
            </InfoContainer>
        </Container>
        <Container>
            <Button background={"#F5C6C7"}>
                <ButtonText color={"#E53D41"}>VER FATURA</ButtonText>
            </Button>
            <InfoContainer>
                <InfoTitle>LIMITE DISPONÍVEL</InfoTitle>
                <InfoContent color={"#E53D41"}>R$ 2640,53</InfoContent>
            </InfoContainer>
        </Container>
        <Container>
            <Button background={"#98E9D4"}>
                <ButtonText color={"#00BA80"}>VER FATURA</ButtonText>
            </Button>
            <InfoContainer>
                <InfoTitle>LIMITE ATUAL</InfoTitle>
                <InfoContent color={"#00BA80"}>R$ 5000,00</InfoContent>
            </InfoContainer>
        </Container>
    </>
  );
};

export default CardsInfo