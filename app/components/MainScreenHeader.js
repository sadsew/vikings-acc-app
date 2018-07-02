// @flow
import React, { Component } from 'react';
import styles from '../assets/styles/MainScreenHeader.scss';

type Props = {
  actions: {
    toggleAddingPanel: () => void
  }
};

export default class MainScreenHeader extends Component<Props> {
  props: Props;
  render() {
    return (
      <div className={styles.header}>
        <button
          className={styles.button}
          onClick={this.props.actions.toggleAddingPanel}
        >
          add account
        </button>
      </div>
    );
  }
}
