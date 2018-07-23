import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from '../assets/styles/AccountsList.scss';
import Account from './Account';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const grid = 10;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: 0,
  margin: `0 0 ${grid}px 0`,
  ...draggableStyle
});

const propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  panels: PropTypes.shape({}).isRequired,
  options: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({
    accountsActions: PropTypes.shape({
      restoreAccounts: PropTypes.func
    })
  }).isRequired
};

class DraggableAccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: this.props.accounts
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const accounts = reorder(
      this.props.accounts,
      result.source.index,
      result.destination.index
    );

    this.setState({
      accounts
    });
    this.props.actions.accountsActions.restoreAccounts(accounts);
  }

  render() {
    const { accounts, actions, panels, options } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div ref={provided.innerRef} className={styles['accounts-list']}>
              <h4 className={styles['accounts-list-title']}>
                <i className="fa fa-user-circle" /> Accounts
              </h4>
              {accounts.length === 0 ? (
                <p className={styles['no-accounts-msg']}>
                  accounts have not been added yet
                </p>
              ) : (
                accounts.map((account, index) => (
                  <Draggable
                    key={account.id}
                    draggableId={account.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Account
                          account={account}
                          actions={actions}
                          editPanel={panels.editAccountPanel.class}
                          key={account.id}
                          fullscreen={options.fullscreen}
                        />
                      </div>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

DraggableAccountList.propTypes = propTypes;

export default DraggableAccountList;
