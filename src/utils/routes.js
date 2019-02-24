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
import RegisterResident from '../pages/RegisterResident';
import RegisterSupervisor from '../pages/RegisterSupervisor';
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
    RegisterResident: RegisterResident,
    RegisterSupervisor: RegisterSupervisor,
    SelectCoach: SelectCoach,
  },
  {
    initialRouteName: 'Home',
  }
), {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default NavigationRouter;
