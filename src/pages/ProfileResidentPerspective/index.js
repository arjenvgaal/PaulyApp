import React from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import paulyprofileResidentPerspective from'../../assets/paulyprofileResidentPerspective.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

const moreStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 350,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});


const ProfileResidentPerspective = ({ navigation }) => (
  <PageBackground source={paulyprofileResidentPerspective}>
    <StyledButton
      style={[moreStyles.position, moreStyles.size]}
      onPress={() => navigation.navigate('ExpensesResident')}
    />
  </PageBackground>
);

export default withNavigation(ProfileResidentPerspective);
