import React from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import paulyprofileSupervisorPerspective from'../../assets/paulyprofileSupervisorPerspective.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

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

const ProfileSupervisorPerspective = ({ navigation }) => (
  <PageBackground source={paulyprofileSupervisorPerspective}>
    <StyledButton
      style={[moreStyles.position, moreStyles.size]}
      onPress={() => navigation.navigate('ExpensesSupervisor')}
    />
    <StyledButton
      style={[addStyles.position, addStyles.size]}
      onPress={() => navigation.navigate('ProfileAddGoal')}
    />
  </PageBackground>
);

export default withNavigation(ProfileSupervisorPerspective);
