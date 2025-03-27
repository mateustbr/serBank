import { View, Text } from 'react-native'
import React from 'react'
import { Container, FeatureBtn, FeatureBtnTxt } from './styled'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SelectFeatures = ({ setFeature }) => {
  return (
    <Container>
      <FeatureBtn 
        onPress={() => {
            setFeature("Cards");
      }}
      >
        <FeatureBtnTxt>
            <MaterialCommunityIcons
                name="credit-card" 
                size={16} 
                color="#e53d41"
            />{" "}
            Cartões
        </FeatureBtnTxt>
      </FeatureBtn>
      <FeatureBtn 
        onPress={() => {
            setFeature("Transfer");
      }}
      >
        <FeatureBtnTxt>
            <MaterialCommunityIcons
                name="bank-transfer" 
                size={16} 
                color="#e53d41"
            />{" "}
            Tranferir
        </FeatureBtnTxt>
      </FeatureBtn>
      <FeatureBtn 
        onPress={() => {
            setFeature("Pix");
      }}
      >
        <FeatureBtnTxt>
            <MaterialCommunityIcons
                name="bank-transfer-out" 
                size={16} 
                color="#e53d41"
            />{" "}
            Pix
        </FeatureBtnTxt>
      </FeatureBtn>
    </Container>
  );
};

export default SelectFeatures