import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/ButtonConfirm.scss';

class ButtonConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showedAcceptWindow: false
    };
    this.showAcceptWindow = this.showAcceptWindow.bind(this);
    this.acceptAction = this.acceptAction.bind(this);
  }

  showAcceptWindow() {
    if (this.state.showedAcceptWindow !== true) {
      return this.setState({ showedAcceptWindow: true });
    }
    this.setState({ showedAcceptWindow: false });
  }

  acceptAction() {
    this.setState({ showedAcceptWindow: false });
    this.props.action();
  }

  render() {
    return (
      <div className={styles['confirm-button']}>
        <button
          onClick={this.showAcceptWindow}
          className={this.props.className}
        >
          {this.props.children}
        </button>
        {this.state.showedAcceptWindow === false ? (
          false
        ) : (
          <div className={styles['accept-window']}>
            <span>{this.props.options.message}</span>
            <button
              className={styles['button-accept']}
              onClick={this.acceptAction}
            >
              YES
            </button>
            <button
              className={styles['button-reject']}
              onClick={this.showAcceptWindow}
            >
              NO
            </button>
          </div>
        )}
      </div>
    );
  }
}

ButtonConfirm.propTypes = {
  children: PropTypes.element.isRequired,
  action: PropTypes.func.isRequired,
  options: PropTypes.shape({
    message: PropTypes.string
  }),
  className: PropTypes.string
};

ButtonConfirm.defaultProps = {
  className: 'default-btn',
  options: {
    message: 'Are you sure?'
  }
};

export default ButtonConfirm;
