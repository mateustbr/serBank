import React from 'react'
import { Container, Field, Label, Title, Form, Input, Button, ButtonText} from './styled';

const Transfer = () => {
  return (
    <Container>
      <Title>Fazer Transferência</Title>

      <Form>
        <Field>
            <Label>Nome</Label>
            <Input placeholder={"Mateus Teixeira"} />
        </Field>
        <Field>
            <Label>CPF</Label>
            <Input placeholder={"000.000.000-00"}
            keyboardType="number-pad" />
        </Field>
        <Field>
            <Label>CPF</Label>
            <Input placeholder={"000.000.000-00"}
            keyboardType="number-pad" />
        </Field>
        <Field>
            <Label>Banco</Label>
            <Input placeholder={"Itaú, Banco do Brasil, Nubank, etc.."}/>
        </Field>
        <Field>
            <Label>Agência</Label>
            <Input placeholder={"0000"}
            keyboardType="number-pad" />
        </Field>
        <Field>
            <Label>Conta com Dígito</Label>
            <Input placeholder={"00000-0"}
            keyboardType="number-pad" />
        </Field>
        <Field>
            <Label>Valor da Transação</Label>
            <Input placeholder={"1000"}
            keyboardType="number-pad" />
        </Field>
      </Form>
        <Button>
            <ButtonText>Enviar Tranferência</ButtonText>
        </Button>
    </Container>
  )
}

export default Transfer;