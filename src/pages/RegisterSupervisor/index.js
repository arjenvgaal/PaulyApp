import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import StyledButton from '../../components/StyledButton';
import paulyregisterSupervisor from'../../assets/paulyregisterSupervisor.png';
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

const selectStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 260,
    left: 50,
  },
  size: {
    width: '74%',
    height: 30,
  }
});


const RegisterSupervisor = ({ navigation }) => (
  <PageBackground source={paulyregisterSupervisor}>
    <StyledButton
      style={[selectStyles.position, selectStyles.size]}
      onPress={() => navigation.navigate('RegisterResident')}
    />
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
    <ActionButton onPress={() => navigation.navigate('Overview')} />
  </PageBackground>
);

export default withNavigation(RegisterSupervisor);
