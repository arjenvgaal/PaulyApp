import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
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
import { fromLeft } from 'react-navigation-transitions';

const NavigationRouter = createAppContainer(createSwitchNavigator(
  {
    ExpensesResidentAdd: ExpensesResidentAdd,
    ExpensesSupervisorAdd: ExpensesSupervisorAdd,
    ExpensesResident: ExpensesResident,
    ExpensesSupervisor: ExpensesSupervisor,
    Home: Home,
    IncomesResident: IncomesResident,
    IncomesSupervisor: IncomesSupervisor,
    IncomesResidentAdd: IncomesResidentAdd,
    IncomesSupervisorAdd: IncomesSupervisorAdd,
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
    initialRouteName: 'ProfileSupervisorPerspective',
    transitionConfig: () => fromLeft(),
  }
), {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default NavigationRouter;
