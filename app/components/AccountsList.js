// @flow
import React, { Component } from 'react';
import Account from './Account';
import styles from '../assets/styles/AccountsList.scss';

type Props = {
  accounts: [],
  actions: {
    accountsActions: {
      addAccount: (payload: {}) => void,
      removeAccount: (payload: string) => void,
      editAccount: (payload: string) => void
    }
  }
};

export default class AccountsList extends Component<Props> {
  props: Props;
  render() {
    const { accounts, actions } = this.props;
    return (
      <div className={styles['accounts-list']}>
        <h4 className={styles['accounts-list-title']}>
          <i className="fa fa-star" /> Favorite accounts
        </h4>
        {accounts
          .filter(account => account.favorite)
          .map(account => (
            <Account
              account={account}
              actions={actions.accountsActions}
              key={account.id}
            />
          ))}
        <h4 className={styles['accounts-list-title']}>
          <i className="fa fa-user-circle" /> Other accounts
        </h4>
        {accounts
          .filter(account => account.favorite !== true)
          .map(account => (
            <Account
              account={account}
              actions={actions.accountsActions}
              key={account.id}
            />
          ))}
      </div>
    );
  }
}
