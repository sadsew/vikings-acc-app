// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router';
import Main from './screens/Main';
import Configs from './screens/Configs';

type Props = {};

export default class Switcher extends React.Component<Props> {
  props: Props;
  render() {
    return (
      <div className="screens-switcher">
        <Switch>
          <Route path="/configs" component={Configs} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}
