// @flow
import React, { Component } from 'react';
import styles from '../assets/styles/Header.scss';

type Props = {};

export default class Header extends Component<Props> {
  props: Props;
  render() {
    return <div className={styles.header} />;
  }
}
