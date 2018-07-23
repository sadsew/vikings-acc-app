import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, type Dispatch } from 'redux';
import * as accountsActions from '../actions/accountsActions';
import * as panelsActions from '../actions/panelsActions';
import * as optionsActions from '../actions/optionsActions';
import MainMenuPanel from './panels/MainMenuPanel';
import styles from '../assets/styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <button
          className={styles.headerButton}
          onClick={this.props.actions.panelsActions.toggleMainMenuPanel}
        >
          {this.props.panels.mainMenuPanel.class !== 'show' ? (
            <i className="fa fa-bars" />
          ) : (
            <i className="fa fa-times" />
          )}
        </button>
        <MainMenuPanel
          class={this.props.panels.mainMenuPanel.class}
          restore={this.props.actions.accountsActions.restoreAccounts}
          optionsActions={this.props.actions.optionsActions}
          options={this.props.options}
        />
      </div>
    );
  }
}

Header.propTypes = {
  panels: PropTypes.shape({
    mainMenuPanel: PropTypes.shape({
      class: PropTypes.string
    })
  }).isRequired,
  options: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({
    panelsActions: PropTypes.shape({
      toggleMainMenuPanel: PropTypes.func
    }),
    accountsActions: PropTypes.shape({
      restoreAccounts: PropTypes.func
    }),
    optionsActions: PropTypes.shape({})
  }).isRequired
};

function mapStateToProps(state) {
  return {
    panels: state.panels,
    options: state.options
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    actions: {
      panelsActions: bindActionCreators(panelsActions, dispatch),
      accountsActions: bindActionCreators(accountsActions, dispatch),
      optionsActions: bindActionCreators(optionsActions, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
