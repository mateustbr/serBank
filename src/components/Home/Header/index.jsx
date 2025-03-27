import React from 'react'
import { Container, UserPhotoContainer, UserPhotoImage, Logo } from './styled';

import {MaterialCommunityIcons} from "@expo/vector-icons";

const Header = () => {
  return (
    <Container>
    <MaterialCommunityIcons name="dots-vertical" size={40} color="#e53d41" />
    <Logo source={require("../../../../assets/logo.png")} />
    <UserPhotoContainer>
      <UserPhotoImage source={require("../../../../assets/UserPhoto.png")} /> 
    </UserPhotoContainer>
    </Container>
  );
};

export default Header;