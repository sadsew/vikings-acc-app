// @flow
import React, { Component } from 'react';
import Header from './Header';
import Switcher from './Switcher';
import Footer from './Footer';

import styles from '../assets/styles/App.scss';

type Props = {};

export default class App extends Component<Props> {
  props: Props;
  render() {
    return (
      <div className={styles['app-container']}>
        <div className={styles.surface}>
          <Header />
          <Switcher />
          <Footer />
        </div>
      </div>
    );
  }
}
