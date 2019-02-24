import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import paulyprofileResidentPerspective from'../../assets/paulyprofileResidentPerspective.png';
import { withNavigation } from 'react-navigation';

const ProfileResidentPerspective = ({ navigation }) => (
  <PageBackground source={paulyprofileResidentPerspective}>
    <ActionButton onPress={() => navigation.navigate('Register')} />
  </PageBackground>
);

export default withNavigation(ProfileResidentPerspective);
