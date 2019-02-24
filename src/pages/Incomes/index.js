import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import StyledButton from '../../components/StyledButton';
import paulyincomes from'../../assets/paulyincomes.png';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 235,
    right: 175,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const Incomes = ({ navigation }) => (
  <PageBackground source={paulyincomes}>
    <StyledButton
      style={[styles.position, styles.size]}
      onPress={() => navigation.navigate('IncomesAdd')}
    />
    <ActionButton onPress={() => navigation.navigate('ProfileResidentPerspective')} />
  </PageBackground>
);

export default withNavigation(Incomes);
