type Props = {
  account: {
    id: string,
    name: string,
    type: string,
    packDate: string,
    comments: string
  },
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

export default Props;
