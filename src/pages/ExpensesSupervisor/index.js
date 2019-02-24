import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import StyledButton from '../../components/StyledButton';
import paulyexpenses from'../../assets/paulyexpenses.png';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 115,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const ExpensesSupervisor = ({ navigation }) => (
  <PageBackground source={paulyexpenses}>
    <StyledButton
      style={[styles.position, styles.size]}
      onPress={() => navigation.navigate('ExpensesSupervisorAdd')}
    />
    <ActionButton onPress={() => navigation.navigate('IncomesSupervisor')} />
  </PageBackground>
);

export default withNavigation(ExpensesSupervisor);
