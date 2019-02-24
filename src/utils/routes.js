import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ExpensesAdd from '../pages/ExpensesAdd';
import ExpensesAdded from '../pages/ExpensesAdded';
import ExpensesEmpty from '../pages/ExpensesEmpty';
import Home from '../pages/Home';
import IncomesAdd from '../pages/IncomesAdd';
import IncomesAdded from '../pages/IncomesAdded';
import IncomesEmpty from '../pages/IncomesEmpty';
import Overview from '../pages/Overview';
import ProfileAddGoal from '../pages/ProfileAddGoal';
import ProfileGoalAddGoalStepAdded from '../pages/ProfileGoalAddGoalStepAdded';
import ProfileAddGoalAddStep from '../pages/ProfileAddGoalAddStep';
import ProfileNoGoals from '../pages/ProfileNoGoals';
import ProfileOneGoal from '../pages/ProfileOneGoal';
import ProfileGoalCompleted from '../pages/ProfileGoalCompleted';
import ProfileOneGoalComplete from '../pages/ProfileOneGoalComplete';
import ProfileGoalAddGoalStepAddedAndChecked from '../pages/ProfileGoalAddGoalStepAddedAndChecked';
import ProfileSupervisorPerspective from '../pages/ProfileSupervisorPerspective';
import RegisterResident from '../pages/RegisterResident';
import RegisterCoach from '../pages/RegisterCoach';
import SelectCoach from '../pages/SelectCoach';
import { fadeIn } from 'react-navigation-transitions';

const NavigationRouter = createAppContainer(createStackNavigator(
  {
    ExpensesAdd: ExpensesAdd,
    ExpensesAdded: ExpensesAdded,
    ExpensesEmpty: ExpensesEmpty,

    IncomesAdd: IncomesAdd,
    IncomesAdded: IncomesAdded,
    IncomesEmpty: IncomesEmpty,

    ProfileNoGoals: ProfileNoGoals,
    ProfileOneGoal: ProfileOneGoal,
    ProfileGoalCompleted: ProfileGoalCompleted,
    ProfileOneGoalComplete: ProfileOneGoalComplete,

    ProfileAddGoal: ProfileAddGoal,
    ProfileAddGoalAddStep: ProfileAddGoalAddStep,
    ProfileGoalAddGoalStepAdded: ProfileGoalAddGoalStepAdded,
    ProfileGoalAddGoalStepAddedAndChecked: ProfileGoalAddGoalStepAddedAndChecked,

    Home: Home,
    Overview: Overview,

    RegisterResident: RegisterResident,
    RegisterCoach: RegisterCoach,
    SelectCoach: SelectCoach,

    ProfileSupervisorPerspective: ProfileSupervisorPerspective,
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
