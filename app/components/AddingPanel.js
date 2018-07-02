// @flow
import React, { Component } from 'react';
// import Cleave from 'cleave.js/react';
import styles from '../assets/styles/AddingPanel.scss';

type Props = {
  cssClass: string,
  actions: {
    addingPanelActions: {
      togglePanel: () => void
    },
    accountsActions: {
      addAccount: (payload: {}) => void,
      removeAccount: (payload: string) => void,
      editAccount: (payload: string) => void
    }
  }
};

type State = {
  nameInput: string,
  dateInput: string,
  accountTypeRadio: string,
  commentsTextArea: string,
  favorite: boolean,
  formFooterResult: {
    type: string,
    message: string
  }
};

type Event = SyntheticEvent<*>;

export default class AddingPanel extends Component<Props, State> {
  nameInputHandler: () => void;
  dateInputHandler: () => void;
  accountTypeHandler: () => void;
  commentsHandler: () => void;
  formResultButtonHandler: () => void;
  favoriteCheckHandler: () => void;

  constructor(props: Props) {
    super(props);
    this.nameInputHandler = this.nameInputHandler.bind(this);
    this.dateInputHandler = this.dateInputHandler.bind(this);
    this.accountTypeHandler = this.accountTypeHandler.bind(this);
    this.commentsHandler = this.commentsHandler.bind(this);
    this.formResultButtonHandler = this.formResultButtonHandler.bind(this);
    this.favoriteCheckHandler = this.favoriteCheckHandler.bind(this);
    this.state = {
      nameInput: '',
      dateInput: '',
      accountTypeRadio: '',
      commentsTextArea: '',
      favorite: false,
      formFooterResult: {
        type: 'none',
        message: ''
      }
    };
  }

  nameInputHandler(event: Event) {
    this.setState({ nameInput: event.currentTarget.value });
  }

  dateInputHandler(event: Event) {
    this.setState({ dateInput: event.currentTarget.value });
  }

  accountTypeHandler(event: Event) {
    this.setState({ accountTypeRadio: event.currentTarget.id });
  }

  commentsHandler(event: Event) {
    this.setState({ commentsTextArea: event.currentTarget.value });
  }

  favoriteCheckHandler() {
    if (this.state.favorite === true) {
      this.setState({ favorite: false });
    } else {
      this.setState({ favorite: true });
    }
  }

  formResultButtonHandler() {
    const success = {
      type: 'success',
      message: 'account was added'
    };

    const error = {
      type: 'error',
      message: 'Account type & ccount name: required.'
    };

    const currentAccount = {
      name: this.state.nameInput,
      type: this.state.accountTypeRadio,
      packDate: this.state.dateInput,
      comments: this.state.commentsTextArea,
      favorite: this.state.favorite
    };

    if (currentAccount.name === '') {
      return this.setState({ formFooterResult: error });
    }

    if (currentAccount.type === '') {
      return this.setState({ formFooterResult: error });
    }

    this.setState({ formFooterResult: success });

    return this.props.actions.accountsActions.addAccount(currentAccount);
  }

  render() {
    const { cssClass, actions } = this.props;
    if (cssClass === 'hide') {
      return <div className={styles['adding-panel-hided']} />;
    }
    return (
      <div className={`${styles['adding-panel']} ${styles[cssClass]}`}>
        <div className={`${styles['adding-panel-surface']}`}>
          <div className={`${styles['adding-panel-header']}`}>
            <h2 className={`${styles['panel-title']}`}>Add new account</h2>
          </div>
          <div className={`${styles['input-block']}`}>
            <div className={`${styles['input-block-title']}`}>
              Account type: <span>*</span>
            </div>
            <div className={`${styles['radio-block-field']}`}>
              <label
                htmlFor="facebook"
                className={`${styles['form-radio-label']}`}
              >
                <input
                  type="radio"
                  id="facebook"
                  name="accountType"
                  onChange={this.accountTypeHandler}
                  checked={this.state.accountTypeRadio === 'facebook'}
                />
                <span>facebook</span>
              </label>
              <label
                htmlFor="plarium"
                className={`${styles['form-radio-label']}`}
              >
                <input
                  type="radio"
                  id="plarium"
                  name="accountType"
                  onChange={this.accountTypeHandler}
                  checked={this.state.accountTypeRadio === 'plarium'}
                />
                <span>plarium</span>
              </label>
            </div>
          </div>
          <div className={`${styles['input-block']}`}>
            <div className={`${styles['input-block-title']}`}>
              Account name: <span>*</span>
            </div>
            <div className={`${styles['input-block-field']}`}>
              <input
                id="nameInput"
                type="text"
                value={this.state.nameInput}
                onChange={this.nameInputHandler}
              />
            </div>
          </div>
          <div className={`${styles['input-block']}`}>
            <div className={`${styles['input-block-title']}`}>
              Last donation:
            </div>
            <div className={`${styles['input-block-field']}`}>
              <input
                id="dateInput"
                type="date"
                defaultValue={this.state.dateInput}
                onChange={this.dateInputHandler}
              />
            </div>
          </div>
          <div
            className={`${styles['input-block']} ${
              styles['input-block-textarea']
            }`}
          >
            <div className={`${styles['input-block-title']}`}>Comments:</div>
            <div className={`${styles['input-block-field']}`}>
              <textarea
                value={this.state.commentsTextArea}
                onChange={this.commentsHandler}
              />
            </div>
          </div>
          <div className={`${styles['input-block']}`}>
            <div className={`${styles['input-block-title']}`}>Favorite: </div>
            <div className={`${styles['input-block-field']}`}>
              <button
                className={`${styles['input-block-check-button']}`}
                onClick={this.favoriteCheckHandler}
              >
                {this.state.favorite === true ? (
                  <i className="fa fa-check" />
                ) : (
                  false
                )}
              </button>
            </div>
          </div>
          <div className={`${styles['input-block']} ${styles['form-footer']}`}>
            <div className={`${styles['form-footer-left']}`}>
              <Messanger
                type={this.state.formFooterResult.type}
                message={this.state.formFooterResult.message}
              />
            </div>
            <div className={`${styles['form-footer-right']}`}>
              <button onClick={this.formResultButtonHandler}>
                add account
              </button>
            </div>
          </div>
          <div className={styles['panel-button']}>
            <button
              className={styles['close-button']}
              onClick={actions.addingPanelActions.togglePanel}
            >
              close <i className="fa fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const Messanger = (props: { message: string, type: string }) => {
  const { message, type } = props;

  return (
    <p id="msgMessanger" className={type}>
      {message}
    </p>
  );
};
