import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/styles/MainScreenHeader.scss';

class MainScreenHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <button
          className={styles.button}
          onClick={this.props.actions.toggleAddAccountPanel}
        >
          add account
        </button>
      </div>
    );
  }
}

MainScreenHeader.propTypes = {
  actions: PropTypes.shape({
    toggleAddAccountPanel: PropTypes.func
  }).isRequired
};

export default MainScreenHeader;
