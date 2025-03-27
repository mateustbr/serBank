import { View, Text } from 'react-native'
import React from 'react'
import { Button, ButtonText, Container, Field, Input, Label, Title } from './styled'

const Pix = () => {
  return (
    <Container>
      <Title>Tranferência Via Pix</Title>
      <Field>
        <Label>Qual o valor a ser enviado?</Label>
        <Input placeholder={"R$ 2500"} keyboardType="number-pad" />
      </Field>
      <Field>
        <Label>Qual a chave PIX?</Label>
        <Input placeholder={"CPF, CNPJ, EMAIL, etc..."} />
      </Field>
      <Button>
        <ButtonText>Enviar Tranferência</ButtonText>
      </Button>
    </Container>
  )
}

export default Pix