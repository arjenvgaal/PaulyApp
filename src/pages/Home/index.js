import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import paulyhome from'../../assets/paulyhome.png';
import { withNavigation } from 'react-navigation';

const Home = ({ navigation }) => (
  <PageBackground source={paulyhome}>
    <ActionButton onPress={() => navigation.navigate('RegisterResident')} />
  </PageBackground>
);

export default withNavigation(Home);
