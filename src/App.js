import React, { Component } from 'react';
import NavigationRouter from './utils/routes';
import NavigationService from './utils/NavigationService';

export default class App extends Component {
  render = () => (
    <NavigationRouter
      ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef); }}
    />
  );
};
