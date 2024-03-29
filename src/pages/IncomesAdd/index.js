import React from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import InputField from '../../components/InputField';
import paulyincomesAdd from'../../assets/paulyincomesAdd.png';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";

const addStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 30,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const backStyles = StyleSheet.create({
  size: {
    width: '100%',
    height: '65%',
  }
});

const inputStyles = StyleSheet.create({
  expensePosition: {
    position: 'absolute',
    bottom: 170,
    marginHorizontal: 50
  },
  amountPosition: {
    position: 'absolute',
    bottom: 130,
    marginHorizontal: 50
  },
  selectPosition: {
    position: 'absolute',
    bottom: 90,
    marginHorizontal: 50
  },
});

const selectStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 90,
    marginHorizontal: 50
  },
  size: {
    width: '74%',
    height: 30,
  }
});

const IncomesAdded = ({ navigation }) => (
  <PageBackground source={paulyincomesAdd}>
    <InputField
      styleOptions={inputStyles.expensePosition}
      placeholder="Name of expense"
    />
    <InputField
      styleOptions={inputStyles.amountPosition}
      placeholder="Amount"
    />
    <StyledButton
      style={[selectStyles.position, selectStyles.size]}
    />
    <StyledButton
      style={[backStyles.size]}
      onPress={() => navigation.navigate('IncomesEmpty')}
    />
    <StyledButton
      style={[addStyles.position, addStyles.size]}
      onPress={() => navigation.navigate('IncomesAdded')}
    />
  </PageBackground>
);

export default withNavigation(IncomesAdded);
