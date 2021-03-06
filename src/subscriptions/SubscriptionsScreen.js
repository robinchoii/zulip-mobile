/* @flow */
import React, { PureComponent } from 'react';

import { Screen } from '../common';
import SubscriptionsContainer from './SubscriptionsContainer';

export default class SubscriptionsScreen extends PureComponent<void> {
  render() {
    return (
      <Screen search title="Subscriptions">
        <SubscriptionsContainer />
      </Screen>
    );
  }
}
