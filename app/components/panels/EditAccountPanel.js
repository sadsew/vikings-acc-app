import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/AddingPanel.scss';

class EditPanel extends Component {
  constructor(props) {
    super(props);
    this.nameInputHandler = this.nameInputHandler.bind(this);
    this.dateInputHandler = this.dateInputHandler.bind(this);
    this.commentsHandler = this.commentsHandler.bind(this);
    this.favoriteCheckHandler = this.favoriteCheckHandler.bind(this);
    this.updateAccount = this.updateAccount.bind(this);
    this.state = {
      name: this.props.account.name,
      packDate: this.props.account.packDate,
      comments: this.props.account.comments,
      favorite: this.props.account.favorite
    };
  }

  nameInputHandler(event) {
    this.setState({ name: event.currentTarget.value });
  }

  dateInputHandler(event) {
    this.setState({ packDate: event.currentTarget.value });
  }

  commentsHandler(event) {
    this.setState({ comments: event.currentTarget.value });
  }

  favoriteCheckHandler() {
    if (this.state.favorite === true) {
      this.setState({ favorite: false });
    } else {
      this.setState({ favorite: true });
    }
  }

  updateAccount() {
    const { state } = this;
    const { account } = this.props;
    const newState = {
      ...account,
      ...state
    };
    this.props.actions.accountsActions.editAccount(newState);
    this.props.actions.panelsActions.toggleEditAccountPanel({});
  }

  render() {
    const { cssClass, actions } = this.props;
    return (
      <div className={`${styles['adding-panel']} ${styles[cssClass]}`}>
        <div className={`${styles['adding-panel-surface']}`}>
          <div className={`${styles['adding-panel-header']}`}>
            <h2 className={`${styles['panel-title']}`}>Update account</h2>
          </div>
          <div className={`${styles['input-block']}`}>
            <div className={`${styles['input-block-title']}`}>
              Account name:
            </div>
            <div className={`${styles['input-block-field']}`}>
              <input
                id="nameInput"
                type="text"
                value={this.state.name}
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
                defaultValue={this.state.packDate}
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
                value={this.state.comments}
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
            className={`${styles['input-block']} ${styles['footer-button']}`}
          >
            <button onClick={this.updateAccount}>update account</button>
          </div>
          <div className={styles['panel-button']}>
            <button
              className={styles['close-button']}
              onClick={() => actions.panelsActions.toggleEditAccountPanel({})}
            >
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

EditPanel.propTypes = {
  cssClass: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    accountsActions: PropTypes.shape({
      editAccount: PropTypes.func
    }),
    panelsActions: PropTypes.shape({
      toggleEditAccountPanel: PropTypes.func
    })
  }).isRequired,
  account: PropTypes.shape({
    name: PropTypes.string,
    packDate: PropTypes.string,
    comments: PropTypes.string,
    favorite: PropTypes.bool
  })
};

EditPanel.defaultProps = {
  account: {}
};

export default props => {
  if (props.account.name) {
    return <EditPanel {...props} />;
  }
  return false;
};
