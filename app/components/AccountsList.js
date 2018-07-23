import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Account from './Account';
import styles from '../assets/styles/AccountsList.scss';

class AccountsList extends Component {
  render() {
    const { accounts, actions, panels, options } = this.props;
    return (
      <div className={styles['accounts-list']}>
        <h4 className={styles['accounts-list-title']}>
          <i className="fa fa-star" /> Favorite accounts
        </h4>
        {accounts.filter(account => account.favorite).length === 0 ? (
          <p className={styles['no-accounts-msg']}>
            accounts have not been added yet
          </p>
        ) : (
          false
        )}
        {accounts
          .filter(account => account.favorite)
          .map(account => (
            <Account
              account={account}
              actions={actions}
              editPanel={panels.editAccountPanel.class}
              key={account.id}
              fullscreen={options.fullscreen}
            />
          ))}
        <h4 className={styles['accounts-list-title']}>
          <i className="fa fa-user-circle" /> Other accounts
        </h4>
        {accounts.filter(account => account.favorite !== true).length === 0 ? (
          <p className={styles['no-accounts-msg']}>
            accounts have not been added yet
          </p>
        ) : (
          false
        )}
        {accounts
          .filter(account => account.favorite !== true)
          .map(account => (
            <Account
              account={account}
              actions={actions}
              editPanel={panels.editAccountPanel.class}
              key={account.id}
              fullscreen={options.fullscreen}
            />
          ))}
      </div>
    );
  }
}

AccountsList.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  actions: PropTypes.shape({}).isRequired,
  panels: PropTypes.shape({}).isRequired,
  options: PropTypes.shape({}).isRequired
};

export default AccountsList;
