import React from 'react'
import { Button, ButtonContainer, ButtonText, Container } from './styled'
import {AntDesign, MaterialIcons, FontAwesome} from "@expo/vector-icons";

const Footer = () => {
  return (
    <Container source={require("../../../../assets/bg.png")}>
      <ButtonContainer>
        <Button>
            <AntDesign name="barcode" size={30} color={"#FFFFFF"} />
            <ButtonText>Pagamentos</ButtonText>
        </Button>
        <Button>
            <MaterialIcons name="attach-money" size={36} color={"#e53d41"} />
            <ButtonText>Extrato</ButtonText>
        </Button>
        <Button>
            <FontAwesome name="bitcoin" size={30} color={"#FFFFFF"} />
            <ButtonText>Investir</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default Footer