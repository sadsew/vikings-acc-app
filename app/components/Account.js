import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import newPersistWindow from '../utils/newPersistWindow';

import styles from '../assets/styles/Account.scss';
import fblogo from '../assets/images/fblogo.jpg';
import pllogo from '../assets/images/pllogo.jpg';
import defaultlogo from '../assets/images/defaultlogo.jpg';

import ConfirmButton from './ui/ButtonConfirm';

class Account extends Component {
  constructor(props) {
    super(props);
    this.playButtonHandler = this.playButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
    this.editButtonHandler = this.editButtonHandler.bind(this);
  }

  removeButtonHandler(payload) {
    this.props.actions.accountsActions.removeAccount(payload);
  }

  editButtonHandler(payload) {
    this.props.actions.accountsActions.editAccount(payload);
  }

  playButtonHandler() {
    const { id, type, logged } = this.props.account;
    newPersistWindow(id, type, logged);
    if (!logged) {
      this.props.actions.accountsActions.accountLogIn(id);
    }
  }

  render() {
    const { account, actions } = this.props;
    const startDate = moment(account.packDate).add(61, 'days');
    const today = moment();
    const arrivDays = startDate.diff(today, 'days');

    function showAccountType(type) {
      switch (type) {
        case 'facebook':
          return <img src={fblogo} alt="fb-logo" />;
        case 'plarium':
          return <img src={pllogo} alt="pl-logo" />;
        case '':
          return <img src={defaultlogo} alt="default-logo" />;
        default:
          return <img src={defaultlogo} alt="default-logo" />;
      }
    }

    return (
      <div className={styles['account-item']} data-accid={account.id}>
        <div className={styles['account-item-header']}>
          <div className={styles['account-item-type']}>
            {showAccountType(account.type)}
          </div>
          <div className={styles['account-item-name']}>
            {account.name}
            {daysCounter(arrivDays)}
          </div>
          <div className={styles['account-control-buttons']}>
            <button
              className={styles['account-control-button-play']}
              onClick={this.playButtonHandler}
            >
              <i className="fa fa-play" />
            </button>
            <button
              className={styles['account-control-button-edit']}
              onClick={() =>
                actions.panelsActions.toggleEditAccountPanel(account)
              }
            >
              <i className="fa fa-edit" />
            </button>
            <ConfirmButton
              className={styles['account-control-button-delete']}
              action={() => this.removeButtonHandler(account.id)}
              options={{ message: `remove ${account.name}?` }}
            >
              <i className="fa fa-times" />
            </ConfirmButton>
          </div>
        </div>
        {commentsBlock(account.comments)}
      </div>
    );
  }
}

Account.propTypes = {
  account: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    logged: PropTypes.bool
  }).isRequired,
  actions: PropTypes.shape({
    accountsActions: PropTypes.shape({
      removeAccount: PropTypes.func,
      editAccount: PropTypes.func,
      accountLogIn: PropTypes.func
    })
  }).isRequired
};

function commentsBlock(comments) {
  if (comments.length < 1) {
    return false;
  }
  return <div className={styles['account-item-comment']}>{comments}</div>;
}

function daysCounter(arrivDays) {
  const twoMonth = arrivDays;
  const threeMonth = arrivDays + 30;

  if (!arrivDays) {
    return false;
  }

  if (arrivDays + 30 < 1) {
    return (
      <span className={styles['account-item-name-days']}>
        <span>ready!</span>
      </span>
    );
  }

  if (arrivDays < 1) {
    return (
      <span className={styles['account-item-name-days']}>
        <span>ready!</span> / {threeMonth}
      </span>
    );
  }

  return (
    <span className={styles['account-item-name-days']}>
      {twoMonth} / {threeMonth}
    </span>
  );
}

export default Account;
