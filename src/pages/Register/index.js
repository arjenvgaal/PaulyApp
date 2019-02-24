import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import paulyregisterResident from'../../assets/paulyregisterResident.png';
import InputField from '../../components/InputField';
import { withNavigation } from "react-navigation";
import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  firstNamePosition: {
    position: 'absolute',
    bottom: 320,
    marginHorizontal: 50
  },
  lastNamePosition: {
    position: 'absolute',
    bottom: 260,
    marginHorizontal: 50
  },
  numberPosition: {
    position: 'absolute',
    bottom: 205,
    marginHorizontal: 50
  },
});


const Register = ({ navigation }) => (
  <PageBackground source={paulyregisterResident}>
    <InputField
      styleOptions={inputStyles.firstNamePosition}
      placeholder="First name"
    />
    <InputField
      styleOptions={inputStyles.lastNamePosition}
      placeholder="Last name"
    />
    <InputField
      styleOptions={inputStyles.numberPosition}
      placeholder="+ 44"
    />
    <ActionButton onPress={() => navigation.navigate('SelectCoach')} />
  </PageBackground>
);

export default withNavigation(Register);
