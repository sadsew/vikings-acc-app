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
        <div className={styles['main-menu-block']}>
          <button onClick={saveStateToFile}>CREATE CONFIG FILE</button>
          <div id="resConteiner" />
        </div>

        <div className={styles['main-menu-block']}>
          <Files
            className="files-dropzone"
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
  restore: PropTypes.func.isRequired
};

export default MainMenuPanel;
