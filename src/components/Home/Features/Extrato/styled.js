import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const TransactionList = styled.ScrollView`
  flex: 1;
`;

export const TransactionItem = styled.View`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  elevation: 2;
`;

export const TransactionDate = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export const TransactionInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TransactionDescription = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const TransactionValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.type === 'credit' ? '#2ecc71' : '#e74c3c'};
`;