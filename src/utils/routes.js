import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from '../pages/Home';
import Incomes from '../pages/Incomes';
import IncomesAdd from '../pages/IncomesAdd';
import Overview from '../pages/Overview';
import ProfileAddGoal from '../pages/ProfileAddGoal';
import ProfileAddGoalAddStep from '../pages/ProfileAddGoalAddStep';
import ProfileResidentPerspective from '../pages/ProfileResidentPerspective';
import ProfileSupervisorPerspective from '../pages/ProfileSupervisorPerspective';
import Register from '../pages/Register';
import SelectCoach from '../pages/SelectCoach';

const NavigationRouter = createAppContainer(createSwitchNavigator(
  {
    Home: Home,
    Incomes: Incomes,
    IncomesAdd: IncomesAdd,
    Overview: Overview,
    ProfileAddGoal: ProfileAddGoal,
    ProfileAddGoalAddStep: ProfileAddGoalAddStep,
    ProfileResidentPerspective: ProfileResidentPerspective,
    ProfileSupervisorPerspective: ProfileSupervisorPerspective,
    Register: Register,
    SelectCoach: SelectCoach,
  },
  {
    initialRouteName: 'ProfileAddGoal',
  }
), {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default NavigationRouter;
