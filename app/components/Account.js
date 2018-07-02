// @flow
import React, { Component } from 'react';
import moment from 'moment';
import styles from '../assets/styles/Account.scss';
import fblogo from '../assets/images/fblogo.jpg';
import pllogo from '../assets/images/pllogo.jpg';
import defaultlogo from '../assets/images/defaultlogo.jpg';
import Props from '../types/ComponentsProps';

export default class Account extends Component<Props> {
  playButtonHandler: (payload: string) => void;
  removeButtonHandler: (payload: string) => void;
  editButtonHandler: (payload: string) => void;
  constructor(props: Props) {
    super(props);
    this.playButtonHandler = this.playButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
    this.editButtonHandler = this.editButtonHandler.bind(this);
  }

  playButtonHandler(payload: string) {
    console.info(payload);
    console.info(this);
  }

  removeButtonHandler(payload: string) {
    this.props.actions.removeAccount(payload);
  }

  editButtonHandler(payload: string) {
    this.props.actions.editAccount(payload);
  }

  render() {
    const { account } = this.props;

    const startDate = moment(account.packDate).add(60, 'days');
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
              onClick={() => this.playButtonHandler(account.id)}
            >
              <i className="fa fa-play" />
            </button>
            <button
              className={styles['account-control-button-edit']}
              onClick={() => this.editButtonHandler(account.id)}
            >
              <i className="fa fa-edit" />
            </button>
            <button
              className={styles['account-control-button-delete']}
              onClick={() => this.removeButtonHandler(account.id)}
            >
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
        {commentsBlock(account.comments)}
      </div>
    );
  }
}

function commentsBlock(comments) {
  if (comments.length < 1) {
    return false;
  }
  return <div className={styles['account-item-comment']}>{comments}</div>;
}

function daysCounter(arrivDays) {
  const days = arrivDays;
  const msg = `- ${days} days`;
  if (!days) {
    return false;
  }
  return <span className={styles['account-item-name-days']}>{msg}</span>;
}
