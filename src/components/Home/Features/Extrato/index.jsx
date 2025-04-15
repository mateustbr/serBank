import React from 'react';
import { Container, Title, TransactionList, TransactionItem, TransactionDate, TransactionInfo, TransactionValue, TransactionDescription } from './styled';

const Extrato = () => {
  const transactions = [
    {
      id: 1,
      date: '10/04/2025',
      description: 'Transferência recebida',
      value: 1500.00,
      type: 'credit',
    },
    {
      id: 2,
      date: '09/04/2025',
      description: 'Pagamento de conta',
      value: -200.50,
      type: 'debit',
    },
    {
      id: 3,
      date: '08/04/2025',
      description: 'Compra no mercado',
      value: -350.75,
      type: 'debit',
    },
    {
      id: 4,
      date: '05/04/2025',
      description: 'Depósito',
      value: 2000.00,
      type: 'credit',
    },
  ];

  return (
    <Container>
      <Title>Extrato</Title>
      <TransactionList>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id}>
            <TransactionDate>{transaction.date}</TransactionDate>
            <TransactionInfo>
              <TransactionDescription>{transaction.description}</TransactionDescription>
              <TransactionValue type={transaction.type}>
                {transaction.type === 'credit' ? '+' : ''}
                {transaction.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </TransactionValue>
            </TransactionInfo>
          </TransactionItem>
        ))}
      </TransactionList>
    </Container>
  );
};

export default Extrato;