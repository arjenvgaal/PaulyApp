import React from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import paulyselectCoach from'../../assets/paulyselectCoach.png';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 50,
    right: 15,
  },
  size: {
    width: 170,
    height: 145,
  }
});

const Home = ({ navigation }) => (
  <PageBackground source={paulyselectCoach}>
    <StyledButton
      style={[styles.position, styles.size]}
      onPress={() => navigation.navigate('ExpensesEmpty')}
    />
  </PageBackground>
);

export default withNavigation(Home);
