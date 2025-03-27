import { FlatList, Dimensions } from 'react-native'
import React from 'react'
import { Container, Title } from './styled';
import CardItem from './CardItem';
import CardsInfo from './CardsInfo';

const Cards = [
    {
      id: 1,
      number: "0000 0000 0000 0000",
      expirationDate: "04/2025",
      cvv: "000",
      flag: "master",
    },
    {
      id: 2,
      number: "0000 0000 0000 0000",
      expirationDate: "04/2025",
      cvv: "000",
      flag: "visa",
    },
    {
      id: 3,
      number: "0000 0000 0000 0000",
      expirationDate: "04/2025",
      cvv: "000",
      flag: "visa",
    },
    {
      id: 4,
      number: "0000 0000 0000 0000",
      expirationDate: "04/2025",
      cvv: "000",
      flag: "master",
    },
];

const width = Dimensions.get("window").width;

const CardsList = () => {
    const renderItem = ({ item }) => <CardItem card={item} key={item.id} />;
  
    return (
    <Container>
      <Title>Meus Cartões</Title>
      <FlatList 
      data={Cards}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      horizontal
      snapToAlignment="start"
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      snapToOffsets={[...Array(Cards.length)].map(
      (x, i) => i * (width * 0.9 - 40) + (i - 1) * 40
)}
      />
      <CardsInfo />
    </Container>
  );
};

export default CardsList