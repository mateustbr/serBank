import React from 'react';
import { ExtratoContainer } from './styled';
import ExtratoComponent from '../../components/Home/Features/Extrato';
import Header from '../../components/Home/Header';
import Footer from '../../components/Home/Footer';

const ExtratoScreen = () => {
  return (
    <ExtratoContainer>
      <Header />
      <ExtratoComponent />
      <Footer />
    </ExtratoContainer>
  );
};

export default ExtratoScreen;