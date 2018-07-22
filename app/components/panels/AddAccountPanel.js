import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/AddingPanel.scss';

class AddingPanel extends Component {
  constructor(props) {
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

  nameInputHandler(event) {
    this.setState({ nameInput: event.currentTarget.value });
  }

  dateInputHandler(event) {
    this.setState({ dateInput: event.currentTarget.value });
  }

  accountTypeHandler(event) {
    this.setState({ accountTypeRadio: event.currentTarget.id });
  }

  commentsHandler(event) {
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
    const clear = {
      type: '',
      message: ''
    };

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
      this.setState({ formFooterResult: error });
      return setTimeout(() => {
        this.setState({ formFooterResult: clear });
      }, 4000);
    }

    if (currentAccount.type === '') {
      this.setState({ formFooterResult: error });
      return setTimeout(() => {
        this.setState({ formFooterResult: clear });
      }, 4000);
    }

    this.setState({ formFooterResult: success });
    this.props.actions.accountsActions.addAccount(currentAccount);
    return setTimeout(() => {
      this.setState({ formFooterResult: clear });
    }, 2000);
  }

  render() {
    const { cssClass, actions } = this.props;
    if (cssClass !== 'show') {
      return <div className={styles['adding-panel-hided']} />;
    }
    return (
      <div className={`${styles['adding-panel']} ${styles[cssClass]}`}>
        <div className={`${styles['adding-panel-surface']}`}>
          <div className={`${styles['adding-panel-header']}`}>
            <h2 className={`${styles['panel-title']}`}>Add account</h2>
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

          <div
            className={`${styles['input-block']} ${styles['footer-messanger']}`}
          >
            <p
              className={`${styles.messangerMessage} ${
                styles[this.state.formFooterResult.type]
              }`}
            >
              {this.state.formFooterResult.message}
            </p>
          </div>

          <div
            className={`${styles['input-block']} ${styles['footer-button']}`}
          >
            <button onClick={this.formResultButtonHandler}>add account</button>
          </div>

          <div className={styles['panel-button']}>
            <button
              className={styles['close-button']}
              onClick={actions.panelsActions.toggleAddAccountPanel}
            >
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

AddingPanel.propTypes = {
  cssClass: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    accountsActions: PropTypes.shape({
      addAccount: PropTypes.func
    })
  }).isRequired
};

export default AddingPanel;
