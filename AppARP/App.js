import React, { Component } from 'react';

import AppNavigator from './src/stackNavigation/RootStack'
import AddNewDepartment from './src/screens/popup/AddNewDepartment';
export default class App extends Component {
  render() {
    return (
    // <AppNavigator />
    <AddNewDepartment/>
    );
  }
}