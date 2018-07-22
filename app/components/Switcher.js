import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Main from './screens/Main';
import styles from '../assets/styles/Switcher.scss';

export default class Switcher extends Component {
  render() {
    return (
      <div className={styles['screens-switcher']}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}
