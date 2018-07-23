import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Files from 'react-files';
import styles from '../../assets/styles/MainMenuPanel.scss';

import saveStateToFile from '../../utils/saveStateToFile';

class MainMenuPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonFile: {}
    };

    this.restoreButtonHandler = this.restoreButtonHandler.bind(this);

    this.fileReader = new FileReader();
    this.fileReader.onload = event => {
      this.setState({ jsonFile: JSON.parse(event.target.result) });
    };
  }

  restoreButtonHandler() {
    this.props.restore(this.state.jsonFile.accounts);
  }

  render() {
    if (this.props.class === 'not-showed') {
      return false;
    }
    return (
      <div
        id="mainMenu"
        className={`${styles.mainMenuPanel} ${styles[this.props.class]}`}
      >
        <h2>General settings</h2>

        <button
          className={`${styles['main-menu-option']} ${
            this.props.options.fullscreen ? styles['option-checked'] : false
          }`}
          onClick={this.props.optionsActions.setFullScreenMode}
        >
          Open new windows in fullscreen mode
          <div className={styles.checker}>
            {this.props.options.fullscreen ? (
              <i className={`fa fa-check ${styles.check}`} />
            ) : (
              <i className={`fa fa-times ${styles.uncheck}`} />
            )}
          </div>
        </button>

        <h2>Saving and restoring accounts</h2>

        <button
          className={`${styles['main-menu-option']}`}
          onClick={saveStateToFile}
        >
          Create config file
          <div className={styles.message}>
            <div id="resConteiner" />
          </div>
        </button>

        <div className={styles['main-menu-block']}>
          <Files
            className={`${styles['files-dropzone']}`}
            onChange={file => {
              this.fileReader.readAsText(file[0]);
            }}
            onError={err => console.log(err)}
            accepts={['.json']}
            multiple={false}
            maxFiles={3}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Drop files here or click to upload
          </Files>
          {this.state.jsonFile.accounts ? (
            <button onClick={this.restoreButtonHandler}>
              RESTORE CONFIG FILE
            </button>
          ) : (
            false
          )}
        </div>
      </div>
    );
  }
}

MainMenuPanel.propTypes = {
  class: PropTypes.string.isRequired,
  restore: PropTypes.func.isRequired,
  options: PropTypes.shape({
    fullscreen: PropTypes.bool
  }).isRequired,
  optionsActions: PropTypes.shape({
    setFullScreenMode: PropTypes.func
  }).isRequired
};

export default MainMenuPanel;
