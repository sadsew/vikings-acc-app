// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import Switcher from './Switcher';

type Props = {};

export default class App extends React.Component<Props> {
  props: Props;
  render() {
    return (
      <div className="app-container">
        <div className="header">
          <Link to="/" replace>Main</Link>
          <Link to="/configs" replace>Config</Link>
        </div>
        <Switcher />
        <div className="footer">footer</div>
      </div>
    );
  }
}
