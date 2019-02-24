import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ExpensesResident from '../pages/ExpensesResident';
import ExpensesSupervisor from '../pages/ExpensesSupervisor';
import ExpensesResidentAdd from '../pages/ExpensesResidentAdd';
import ExpensesSupervisorAdd from '../pages/ExpensesSupervisorAdd';
import Home from '../pages/Home';
import IncomesResident from '../pages/IncomesResident';
import IncomesSupervisor from '../pages/IncomesSupervisor';
import IncomesResidentAdd from '../pages/IncomesResidentAdd';
import IncomesSupervisorAdd from '../pages/IncomesSupervisorAdd';
import Overview from '../pages/Overview';
import ProfileAddGoal from '../pages/ProfileAddGoal';
import ProfileAddGoalAddStep from '../pages/ProfileAddGoalAddStep';
import ProfileResidentPerspective from '../pages/ProfileResidentPerspective';
import ProfileSupervisorPerspective from '../pages/ProfileSupervisorPerspective';
import RegisterResident from '../pages/RegisterResident';
import RegisterSupervisor from '../pages/RegisterSupervisor';
import SelectCoach from '../pages/SelectCoach';
import { fadeIn } from 'react-navigation-transitions';

const NavigationRouter = createAppContainer(createStackNavigator(
  {
    ExpensesResidentAdd: ExpensesResidentAdd,
    ExpensesSupervisorAdd: ExpensesSupervisorAdd,
    IncomesResidentAdd: IncomesResidentAdd,
    IncomesSupervisorAdd: IncomesSupervisorAdd,
    ExpensesResident: ExpensesResident,
    ExpensesSupervisor: ExpensesSupervisor,
    Home: Home,
    IncomesResident: IncomesResident,
    IncomesSupervisor: IncomesSupervisor,
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
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      gesturesEnabled: true
    },
    transitionConfig: () => fadeIn(),
  }
), {
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
    gesturesEnabled: true
  },
});

export default NavigationRouter;
